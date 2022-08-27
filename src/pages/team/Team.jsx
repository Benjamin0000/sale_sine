import React from 'react'
import './team.css'
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react'
import Activity from '../../components/activity/Activity'
import Interaction from '../../components/interaction/Interaction'
import Coaching from '../../components/coaching/Coaching'

const Team = () => {
    const [navActive, setNavActive] = useState({
        teamActivity: true,
        teamInteraction: false,
        teamTopics: false,
        teamTrackers: false,
        teamSmart: false,
        teamScore: false,
        teamCoaching: false,
    })
    return (
        <div className='teamApp'>
            <Navbar type='teams' />
            <div className="teamWrapper">
                <div className="teamWrapperHead">
                    <div className="teamWrapperHead1">
                        <div className="teamWrapperHeading">Team Dashboard</div>
                        <div className="teamWrapperNav">
                            <div className="headNav" style={{ color: (navActive.teamActivity ? '#D9B75E' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: true,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: false,
                            })}>Activity</div>
                            <div className="headNav" style={{ color: (navActive.teamInteraction ? '#D9B75E' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: true,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: false,
                            })} >Interaction</div>
                            <div className="headNav" style={{ color: (navActive.teamTopics ? '#D9B75E' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: true,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: false,
                            })}>Topics</div>
                            <div className="headNav" style={{ color: (navActive.teamTrackers ? '#D9B75E' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: true,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: false,
                            })}>Trackers</div>
                            <div className="headNav" style={{ color: (navActive.teamSmart ? '#D9B75E' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: true,
                                teamScore: false,
                                teamCoaching: false,
                            })}>Smart Trackers</div>
                            <div className="headNav" style={{ color: (navActive.teamScore ? '#D9B75E' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: true,
                                teamCoaching: false,
                            })}>Scorecard</div>
                            <div className="headNav" style={{ color: (navActive.teamCoaching ? '#D9B75E' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: true,
                            })}>Coaching Recieved</div>
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
                <div className="teamWrapperBody">
                    {navActive.teamActivity && <div className="bodyActivity">
                        <div className="navName">Activity</div>
                        <Activity />
                    </div>}
                    {navActive.teamInteraction && <div className="bodyInteraction">
                        <div className="navName">Interaction</div>
                        <Interaction/>
                    </div>}
                    {navActive.teamTopics && <div className="bodyTopics">
                        <div className="navName">Topics</div>
                    </div>}
                    {navActive.teamTrackers && <div className="bodyTrackers">
                        <div className="navName">Trackers</div>
                    </div>}
                    {navActive.teamSmart && <div className="bodyTrackers">
                        <div className="navName">Smart Trackers</div>
                    </div>}
                    {navActive.teamScore && <div className="bodyScore">
                        <div className="navName">ScoreCard</div>
                    </div>}
                    {navActive.teamCoaching && <div className="bodyCoaching">
                        <div className="navName">Team Coaching</div>
                        <Coaching/>
                    </div>}
                </div>

            </div>
        </div>
    )
}

export default Team