import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import home from '../../assets/home.png'
import { PieChart } from 'react-minimal-pie-chart'
import ellipse from '../../assets/Ellipse.png'
import adviser from '../../assets/adviser.png'


const Home = () => {
    return (
        <>
            <Navbar type='home' />
            <div className='homeWrapper'>
                <div className="homeHeader" style={{ backgroundImage: `url(${home})` }}>
                    <div className="homeHeaderHeading">Dashboard</div>
                </div>
                <div className="homeBody">
                    <div className='homeBody1'>
                        <div className="homeBodyPerformance">
                            <div className="performanceHeading">
                                <div className="performanceHead">Team Performance</div>
                            </div>
                            <div className="performanceData">
                                <PieChart data={[
                                    { title: '', value: 100, color: '#888888' },
                                    { title: '', value: 180, color: '#FFFFFF' },
                                    { title: '', value: 80, color: '#F5F5F5' },
                                ]} startAngle={-100} />
                            </div>
                        </div>
                        <div className="homeBodyPerformance">
                            <div className="performanceHeading">
                                <div className="performanceSub">Today's Highlight</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '400px', height: '440px', gap: '20px' }}>
                            <div className="homeBodyPerformance" style={{ width: '190px', height: '210px' }}>
                                <div className="performanceHeading">
                                    <div className="performanceSub">Closing Deals</div>
                                </div>
                            </div>
                            <div className="homeBodyPerformance" style={{ width: '190px', height: '210px' }}>
                                <div className="performanceHeading">
                                    <div className="performanceSub">Deals Created</div>
                                </div>
                            </div>
                            <div className="homeBodyPerformance" style={{ width: '190px', height: '210px', background: '#FFFFFF' }}>
                                <div className="performanceHeading">
                                    <img src={adviser} alt="" />
                                </div>
                            </div>
                            <div className="homeBodyPerformance" style={{ width: '190px', height: '210px' }}>
                                <div className="performanceHeading">
                                    <div className="performanceSub">Recordings</div>
                                </div>
                            </div>
                        </div>
                        <div className="homeBodyPerformance" style={{ height: '440px' }}>
                            <div className="homeBodyPerformanceHeader">
                                <div className="homeBodyHeader1">Recent Calls</div>
                                <div className="homeBodyHeaderGap"></div>
                                <div className="homeBodyHeader2">
                                    <div className="homeBodyHeaderName">Recordings</div>
                                </div>
                            </div>
                            <div className="performanceHeading" style={{ gap: '20px', paddingTop: '0px' }}>
                                <div className="performanceHead">Today</div>
                                <div className="performanceHeadingData">
                                    <div className="emptyDiv"></div>
                                    <div className="headingDataHead">
                                        <div className="headingCompanyName">Company Name</div>
                                        <div className="headingCompanyDate">Date</div>
                                        <div className="headingCompanyClosing">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src="https://img.icons8.com/ios/16/000000/mail.png" alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src='https://img.icons8.com/ios/16/000000/ringer-volume.png' alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                            <div className="performanceHeading" style={{ gap: '20px', paddingTop: '0px' }}>
                                <div className="performanceHead">Yesterday</div>
                                <div className="performanceHeadingData">
                                    <div className="emptyDiv"></div>
                                    <div className="headingDataHead">
                                        <div className="headingCompanyName">Company Name</div>
                                        <div className="headingCompanyDate">Date</div>
                                        <div className="headingCompanyClosing">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src="https://img.icons8.com/ios/16/000000/mail.png" alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src='https://img.icons8.com/ios/16/000000/ringer-volume.png' alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                            <div className="performanceHeading" style={{ gap: '20px', paddingTop: '0px' }}>
                                <div className="performanceHead">Tuesday</div>
                                <div className="performanceHeadingData">
                                    <div className="emptyDiv"></div>
                                    <div className="headingDataHead">
                                        <div className="headingCompanyName">Company Name</div>
                                        <div className="headingCompanyDate">Date</div>
                                        <div className="headingCompanyClosing">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src="https://img.icons8.com/ios/16/000000/mail.png" alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src='https://img.icons8.com/ios/16/000000/ringer-volume.png' alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='homeBody2'>
                        {/* <div style={{ display: 'flex', flexWrap: 'wrap', width: '380px', height: '760px' }}> */}
                            <div className="homeBodyPerformance" style={{ flexDirection: 'row', width: '380px', height: '200px', gap: '30px' }}>
                                <div className="performanceHeading">
                                    <div className="performanceHead">Top Performer</div>
                                    <div className="performanceSub">Congratulations!!</div>
                                </div>
                                <div className="performanceImg">
                                    <img src={ellipse} width='120px' height='100px' alt="" />
                                </div>
                            </div>
                            <div className="homeBodyPerformance" style={{ width: '380px', height: '540px' }}>
                                <div className="homeBodyPerformanceHeader">
                                    <div className="homeBodyHeader1">To Do List</div>
                                </div>
                                <div className="performanceHeading" style={{ gap: '5px', paddingTop: '0px' }}>
                                    <div className="performanceHead">Today</div>
                                    <div className="performanceHeadingData">
                                        <div className="emptyDiv" style={{ height: '50px' }}></div>
                                        <div className="headingDataHead">
                                            <div className="headingCompanyName">Heading</div>
                                            <div className="headingCompanyDate">July 19, 2022, Reps name,</div>
                                            <div className="headingCompanyClosing">Client's name</div>
                                        </div>
                                    </div>
                                    <div className="performanceHeadingData">
                                        <div className="emptyDiv" style={{ height: '50px' }}></div>
                                        <div className="headingDataHead">
                                            <div className="headingCompanyName">Heading</div>
                                            <div className="headingCompanyDate">July 19, 2022, Reps name,</div>
                                            <div className="headingCompanyClosing">Client's name</div>
                                        </div>
                                    </div>
                                    <div className="performanceHeadingData">
                                        <div className="emptyDiv" style={{ height: '50px' }}></div>
                                        <div className="headingDataHead">
                                            <div className="headingCompanyName">Heading</div>
                                            <div className="headingCompanyDate">July 19, 2022, Reps name,</div>
                                            <div className="headingCompanyClosing">Client's name</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="performanceHeading" style={{ gap: '5px', paddingTop: '0px' }}>
                                    <div className="performanceHead">Yesterday</div>
                                    <div className="performanceHeadingData">
                                        <div className="emptyDiv" style={{ height: '50px' }}></div>
                                        <div className="headingDataHead">
                                            <div className="headingCompanyName">Heading</div>
                                            <div className="headingCompanyDate">July 19, 2022, Reps name,</div>
                                            <div className="headingCompanyClosing">Client's name</div>
                                        </div>
                                    </div>
                                    <div className="performanceHeadingData">
                                        <div className="emptyDiv" style={{ height: '50px' }}></div>
                                        <div className="headingDataHead">
                                            <div className="headingCompanyName">Heading</div>
                                            <div className="headingCompanyDate">July 19, 2022, Reps name,</div>
                                            <div className="headingCompanyClosing">Client's name</div>
                                        </div>
                                    </div>
                                    <div className="performanceHeadingData">
                                        <div className="emptyDiv" style={{ height: '50px' }}></div>
                                        <div className="headingDataHead">
                                            <div className="headingCompanyName">Heading</div>
                                            <div className="headingCompanyDate">July 19, 2022, Reps name,</div>
                                            <div className="headingCompanyClosing">Client's name</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home