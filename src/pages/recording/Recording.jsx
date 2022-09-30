import React, { useState } from 'react'
import moment from 'moment';
import Navbar from '../../components/Navbar/Navbar'
import next from '../../assets/next.png'
import nextw from '../../assets/nextw.png'
import plus from '../../assets/plus.png'
import './recording.css'
import previous from '../../assets/previous.png'
import share from '../../assets/share.png'
import play from '../../assets/play.png'
import next1 from '../../assets/next1.png'
import close from '../../assets/close.png'
import Stats from '../../components/stats/Stats'
import Chat from '../../components/chat/Chat'
import Interest from '../../components/interest/Interest';
import ReactPlayer from 'react-player';
import Transcript from '../../components/transcript/Transcript';
import { useRef } from 'react';

const Recording = () => {


  // const [change, setChange] = useState(false)
  const [isShare, setShare] = useState(false)
  const [isTranscript, setIsTranscript] = useState(false)
  // const [speed, setSpeed] = useState("1x")
  const [isNav, setIsNav] = useState({
    openInterest: false,
    openInteraction: false,
    openCompany: false,
    openSlides: false,
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
    const totalDuration = new Date(duration * 1000).toISOString().slice(14, 19);
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
    const playedSeconds = new Date(state.playedSeconds * 1000).toISOString().slice(14, 19);
    setStates({
      ...states,
      playedSeconds: playedSeconds,
      played: state.played,
      loaded: state.loaded
    })
  }
  const [tags, setTags] = useState([])

  function handleKeyDown(e) {
    // If user did not press enter key, return
    if (e.key !== 'Enter') return
    // Get the value of the input
    const value = e.target.value
    // If the value is empty, return
    if (!value.trim()) return
    // Add the value to the tags array
    setTags([...tags, value])
    // Clear the input
    e.target.value = ''
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }

  const { playing, playedSeconds, duration, playbackSpeed, loaded, played } = states



  const formatDate = moment().format('LL')
  const player = useRef();
  const myStamp  = useRef();
  return (
    <>
      {isShare && <div className="share">
        <div className="shareBlock">
          <div className="shareHeader">
            <div className="shareHead">Share</div>
            <div className="shareClose">
              <img src="https://img.icons8.com/ios-glyphs/12/ffffff/delete-sign.png" alt="close" onClick={() => setShare(false)} />
            </div>
          </div>
          <div className="shareBody">
            <div className="tagBody">
              <div>Share with:</div>
              <div className="tagInputConrainer">
                <div className="tagPlacer">
                  {tags.map((tag, index) => (
                    <div className="tagItem">
                      <span className="text">{tag}</span>
                      <img src={close} alt="" onClick={() => removeTag(index)} />
                    </div>
                  ))}
                </div>
                <input onKeyDown={handleKeyDown} type="text" className="tags-input" />
              </div>
            </div>
            <div className="addMessage">
              <div>Add a message:</div>
              <div className="messageContainer">
                <textarea placeholder='Message' />
              </div>
            </div>
            <div className="trimContainer">
              <div className="trimHeader">
                <div className="trimHead">Trim call:</div>
                <div className="trimFilter">
                  <div className='trimType'>Start</div>
                  <div className="trimTime">00:00</div>
                  <div>-</div>
                  <div className="trimTime">00:00</div>
                  <div className='trimType'>End</div>
                </div>
              </div>
              <div className="trimBody">
                <img src={play} alt="" />
              </div>
            </div>
            <div className="shareFooter">
              <div className="shareFooterPart1">
                <div className="footer1Button">
                  <div className="footerButtonName">Share</div>
                  <img src={nextw} alt="" />
                </div>
                <div className="footer1Link">
                  <img src={share} alt="" />
                  <div className='shareable'>Get shareable link</div>
                </div>
              </div>
              <div className="shareFooterPart2">
                <div className='shareable'>Access to this call will expire in </div>
                <div className="shareableNumber">5</div>
                <div className="shareable"> days</div>
              </div>
            </div>
          </div>
        </div>
      </div>}
      <Navbar type='recording' />
      <div className='headerWrapper'>
        <div className="topics">
          <div className="topic" onClick={() => {
            setIsNav({
              openCompany: false,
              openInterest: (!isNav.openInterest),
              openInteraction: false,
              openSlides: false
            })
          }}>
            <p>Point of Interest</p>
          </div>
          <div className="topic" onClick={() => {
            setIsNav({
              openCompany: false,
              openInterest: false,
              openInteraction: (!isNav.openInteraction),
              openSlides: false
            })
          }}>
            <p>Interaction stats</p>
          </div>
          <div className="topic" onClick={() => setIsNav({
            openCompany: false,
            openInterest: false,
            openInteraction: false,
            openSlides: (!isNav.openSlides)
          })}>
            <p>Slides</p>
          </div>
          <div className="topic" onClick={() => setIsNav({
            openCompany: (!isNav.openCompany),
            openInterest: false,
            openInteraction: false,
            openSlides: false
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
              <div className="twoicons">
                <div className="first" onClick={() => setShare(true)}>
                  <div>Share</div>
                  <img src={next} alt="" style={{ width: "14px", height: "14px" }} />
                </div>
                <div className="first">
                  <div>Add to Library</div>
                  <img src={plus} alt="" />
                </div>
              </div>
              <div className="Player2">
                <ReactPlayer
                  ref={player}
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
            </div>
          </>
        }
        {isTranscript &&
          <div className="transcriptApp">
            <Transcript isNav={isNav} />
          </div>
        }
        <Chat />
      </div>

      <div className="recording">
        <div className="part1">
          <img src="https://img.icons8.com/color/30/000000/video-call--v1.png" alt="video" />
          <p>Client video call recording</p>
        </div>
        <div className='divider'></div>
        <div className="part2">
          <div className="controllers">
            <img src={previous} alt="previous" className='previous' />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={(playing & !isTranscript) ? "https://img.icons8.com/ios-glyphs/50/FFFFFF/circled-pause.png" : "https://img.icons8.com/ios-glyphs/50/ffffff/play-button-circled--v1.png"} alt="play" className='play' onClick={() => setStates({
                ...states,
                playing: (!playing)
              })} style={{ zIndex: '4' }} />
              <div style={{ background: '#3F51B5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', position: 'absolute' }}></div>
            </div>
            <img src={next1} alt="next" className='next' />
          </div>
          <div className="loader">
            <div className="current">{playedSeconds}</div>
            <div className="length" onClick={()=>console.log(player)}>
              <div className="loadedLength" style={{ width: `${loaded * 100}%`, height: '5px', backgroundColor: 'white', zIndex: '1', position: 'absolute' }} ></div>
              <div className="playedLength" style={{ width: `${played * 100}%`, height: '5px', backgroundColor: '#3F51B5', zIndex: '2', position: 'absolute' }}></div>
            </div>
            <div className="total">{duration}</div>
          </div>
          <div className='button'>
            <div className={isTranscript ? 'activeOne' : 'buttons'} onClick={() => setIsTranscript(true)}>Transcript</div>
            <div className={!isTranscript ? 'activeOne' : 'buttons'} onClick={() => setIsTranscript(false)}>Video</div>
          </div>
        </div>
        {/* <div className='divider'></div> */}
        {/* <div className="part3">
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
        </div> */}
      </div>
    </>
  )
}

export default Recording