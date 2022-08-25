import React from 'react'
import './team.css'
import Navbar from '../../components/Navbar/Navbar'

const Team = () => {
    return (
        <div className='teamApp'>
            <Navbar type='teams' />
            <div className="teamWrapper">
                <div className="teamWrapperHead">
                    <div className="teamWrapperHead1">
                        <div className="teamWrapperHeading">Team Dashboard</div>
                        <div className="teamWrapperNav">
                            <div className="headNav">Activity</div>
                            <div className="headNav">Interaction</div>
                            <div className="headNav">Topics</div>
                            <div className="headNav">Trackers</div>
                            <div className="headNav">Smart Trackers</div>
                            <div className="headNav">Scorecard</div>
                            <div className="headNav">Coaching Recieved</div>
                        </div>
                    </div>
                    <div className="teamWrapperHead2">
                        <div className="teamHeadButton">
                            <div className="teamHeadButtonName">STATS</div>
                        </div>
                        <div className="teamHeadButton">
                            <div className="teamHeadButtonName">COACHING</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team