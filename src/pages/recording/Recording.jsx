import React, { useState } from 'react'
import moment from 'moment';
import Navbar from '../../components/Navbar/Navbar'
import next from '../../assets/next.png'
import './recording.css'
import Stats from '../../components/stats/Stats'
import Chat from '../../components/chat/Chat'
import Interest from '../../components/interest/Interest';
import ReactPlayer from 'react-player';
import Transcript from '../../components/transcript/Transcript';

const Recording = () => {

  
  const [change, setChange] = useState(false)
  const [isTranscript, setIsTranscript] = useState(false)
  const [speed, setSpeed] = useState("1x")
  const [isNav , setIsNav ] = useState({
    openInterest : false,
    openInteraction : false,
    openCompany : false,
    openSlides : false,
  })

  const [states, setStates] = useState({
    playing: false,
    duration: 0,
    playbackSpeed: 1,
    playedSeconds: 0,
    played: 0,
    loaded: 0,
    loadedSeconds: 0,
  })

  const handleDuration = (duration) => {
    const totalDuration = new Date(duration * 1000).toISOString().slice(11, 19);
    console.log(totalDuration)
    setStates({
      ...states,
      duration: totalDuration
    })
  }

  const handleEnd = () => {
    setStates({
      ...states,
      playing: false,
    })
  }

  const handleProgress = state => {
    console.log(state)
    const playedSeconds = new Date(state.playedSeconds * 1000).toISOString().slice(11, 19);
    setStates({
      ...states,
      playedSeconds: playedSeconds,
      played: state.played,
      loaded: state.loaded
    })
  }

  const { playing, playedSeconds, duration, playbackSpeed, loaded, played } = states


  const formatDate = moment().format('LL')
  return (
    <>
      <Navbar type = 'recording' />
      <div className='headerWrapper'>
        <div className="topics">
          <div className="topic" onClick={() => { setIsNav({
            openCompany : false,
            openInterest : (!isNav.openInterest),
            openInteraction : false,
            openSlides : false
          }) }}>
            <p>Point of Interest</p>
          </div>
          <div className="topic" onClick={() => { setIsNav({
            openCompany : false,
            openInterest : false,
            openInteraction : (!isNav.openInteraction),
            openSlides : false
          }) }}>
            <p>Interaction stats</p>
          </div>
          <div className="topic" onClick={() => setIsNav({
            openCompany : false,
            openInterest : false,
            openInteraction : false,
            openSlides : (!isNav.openSlides)
          })}>
            <p>Slides</p>
          </div>
          <div className="topic" onClick={() => setIsNav({
            openCompany : (!isNav.openCompany),
            openInterest : false,
            openInteraction : false,
            openSlides : false
          })}>
            <p>Company</p>
          </div>
        </div>
        <div className="date">
          {formatDate}
        </div>
      </div>
      <div className='recordingWrapper'>
        {isNav.openInteraction && <Stats />}
        {isNav.openInterest && <Interest />}
        {!isTranscript &&
          <>
            <div className={((isNav.openInterest || isNav.openInteraction || isNav.openCompany || isNav.openSlides) ? 'playerWrapper' : 'playerWrapper2')}>
              <div className="Player2">
                <ReactPlayer
                  url='demo.mp4'
                  width='100%'
                  height='100%'
                  playing={playing}
                  onDuration={handleDuration}
                  onEnded={handleEnd}
                  playbackRate={playbackSpeed}
                  onProgress={handleProgress}
                />
              </div>
              <div className='repsStats'>
                <div className='repsStatsName'>Reps Stats</div>
              </div>
            </div>
          </>
        }
        {isTranscript &&
          <div className="transcriptApp">
            <Transcript isNav = {isNav} />
          </div>
        }
        <Chat />
      </div>
      <div className="twoicons">
        <div className="first">
          <img src={next} alt="" style={{ width: "24px", height: "24px" }} />
        </div>
        <div className="second">
          <img src="https://img.icons8.com/external-simple-solid-edt.graphics/24/000000/external-Plus-add-and-remove-simple-solid-edt.graphics.png" alt="" />
        </div>
      </div>
      <div className="recording">
        <div className="part1">
          <img src="https://img.icons8.com/color/30/000000/video-call--v1.png" alt="video" />
          <p>Client video call recording</p>
        </div>
        <div className='divider'></div>
        <div className="part2">
          <div className="upper">
            <div className='button'>
              <p onClick={()=>setIsTranscript(false)}>Video</p>
            </div>
            <div className="controllers">
              <img src="https://img.icons8.com/external-inkubators-glyph-inkubators/20/ffffff/external-previous-video-interface-inkubators-glyph-inkubators.png" alt="previous" className='previous' />
              <img src={playing ? "https://img.icons8.com/ios/40/FFFFFF/circled-pause.png" : "https://img.icons8.com/ios/40/ffffff/play-button-circled--v1.png"} alt="play" className='play' onClick={() => setStates({
                ...states,
                playing: (!playing)
              })} />
              <img src="https://img.icons8.com/ios-filled/24/ffffff/end--v1.png" alt="next" className='next' />
            </div>
            <div className='button'>
              <p onClick={()=>setIsTranscript(true)}>Transcript</p>
            </div>
          </div>
          <div className="lower">
            <div className="current">{playedSeconds}</div>
            <div className="length">
              <div className="loadedLength" style={{ width: `${loaded * 100}%`, height: '5px', backgroundColor: 'white', zIndex: '1', position: 'absolute' }}></div>
              <div className="playedLength" style={{ width: `${played * 100}%`, height: '5px', backgroundColor: 'black', zIndex: '2', position: 'absolute' }}></div>
            </div>
            <div className="total">{duration}</div>
          </div>
        </div>
        <div className='divider'></div>
        <div className="part3">
          <div className='head'>Speed</div>
          <div className="ok">
            {change &&
              <>
                <div className="options">
                  <div className="option" onClick={() => {
                    setSpeed("0.5x"); setChange(!change); setStates({
                      ...states,
                      playbackSpeed: 0.5
                    })
                  }}>0.5x</div>
                  <div className="option" onClick={() => {
                    setSpeed("1x"); setChange(!change); setStates({
                      ...states,
                      playbackSpeed: 1
                    })
                  }}>1.0x</div>
                  <div className="option" onClick={() => {
                    setSpeed("1.5x"); setChange(!change); setStates({
                      ...states,
                      playbackSpeed: 1.5
                    })
                  }}>1.5x</div>
                  <div className="option" onClick={() => {
                    setSpeed("2x"); setChange(!change); setStates({
                      ...states,
                      playbackSpeed: 2
                    })
                  }}>2x</div>
                </div>
              </>
            }
            <div className="speed" onClick={(e) => setChange(!change)}>
              <div className='option1'>{speed}</div>
              <img src="https://img.icons8.com/material/24/ffffff/sort-down--v1.png" alt="speed" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recording