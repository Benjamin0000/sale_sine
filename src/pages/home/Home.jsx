import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import home from '../../assets/home.png'
import { PieChart } from 'react-minimal-pie-chart'
import Chart from 'react-google-charts'
import performer from '../../assets/performer.png'
import call from '../../assets/call.png'
import msg2 from '../../assets/msg2.png'
import phone from '../../assets/phone.png'

export const todayHighlight = [
    { id: 1, heading: 'Heading', date: 'Jul 19, 2022', RepsName: 'Reps Name', companyName: 'ABC Company' },
    { id: 2, heading: 'Heading', date: 'Jul 19, 2022', RepsName: 'Reps Name', companyName: 'ABC Company' },
    { id: 3, heading: 'Heading', date: 'Jul 19, 2022', RepsName: 'Reps Name', companyName: 'ABC Company' },
    { id: 3, heading: 'Heading', date: 'Jul 19, 2022', RepsName: 'Reps Name', companyName: 'ABC Company' },
]

export const data = [
    ['performance', 'number'],
    ['Somewhat well', 40],
    ['Not so well', 230],
    ['Extremely well', 90],
]

export const options = {
    legend: {
        position: 'center',
    },
    width: 380,
    height: 200,
    title: '',
    pieSliceText: "none",
    backgroundColor: "transparent",
    colors: ['#888888', '#E5EFFF', '#3F51B5']
}

const Home = () => {
    return (
        <>
            <Navbar type='home' />
            <div className='homeWrapper'>
                <div className="homeHeader">
                    <div className="homeHeaderHeading">Dashboard</div>
                </div>
                <div className="homeBody">
                    <div className="homeBody1">
                        <div className="homeBody1Part1">
                            <div className="part1part1">
                                <div className="partHead">Total Deals</div>
                                <div className="partNumber">150</div>
                            </div>
                            <div className="part1part1">
                                <div className="partHead">Closed Deals</div>
                                <div className="partNumber">90</div>
                            </div>
                            <div className="part1part1">
                                <div className="partHead">Active Deals</div>
                                <div className="partNumber">60</div>
                            </div>
                        </div>
                        <div className="homeBody1Part2">
                            <div className="partHead">Today's Highlight</div>
                            {
                                todayHighlight.map((data, i) => (
                                    <div className='highlights'>
                                        <div className="partHead" style={{ color: '#3F51B5' }} >{data.heading}</div>
                                        <div className="partSubHead">{data.date}, {data.RepsName}, {data.companyName}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="homeBody1Part3">
                            <div className="partHeader">
                                <div className="partHead">Top Performer</div>
                                <div className="partSubHead">Congratulations!</div>
                            </div>
                            <div className="img">
                                <img src={performer} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="homeBody2">
                        <div className="homeBody2Part1">
                            <div className="partHead">Team Performance</div>
                            <PieChart data={[
                                { title: 'Extremely well', value: 90, color: '#3F51B5', label: 'Extremely well' },
                                { title: 'Somewhat well', value: 40, color: '#888888', label: 'Somewhat well' },
                                { title: 'Not so well', value: 230, color: '#E5EFFF', label: 'Not so well' },
                            ]} startAngle={180} radius={40} style={{ height: '100%', width: '72%' }} />
                            {/* <Chart options={options} data={data} chartType='PieChart' /> */}
                        </div>
                        <div className="homeBody2Part2">
                            <div className="homeBodyPerformanceHeader">
                                <div className="partHead" style={{ fontWeight: '700', fontSize: '16px' }} >Recent Calls</div>
                                <div className="homeBodyHeaderGap"></div>
                                <div className="homeBodyHeader2">
                                    <div className="partHead" style={{ fontWeight: '400' }}>Recordings</div>
                                </div>
                            </div>
                            <div className="highlights" style={{ gap: '15px', paddingLeft: '10px' }} >
                                <div className="partHead" style={{ color: '#3F51B5', fonstSize: '15px' }}>Today</div>
                                <div className="performanceHeadingData">
                                    <div className="recentCallsImg">
                                        <img src={call} alt="" />
                                    </div>
                                    <div className="partHeader">
                                        <div className="partHead">ABC Company</div>
                                        <div className="partSubHead">Date</div>
                                        <div className="partSubHead">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src={msg2} alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src={[phone]} alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                            <div className="highlights" style={{ gap: '15px', paddingLeft: '10px' }} >
                                <div className="partHead" style={{ color: '#3F51B5', fonstSize: '15px' }}>Yesterday</div>
                                <div className="performanceHeadingData">
                                    <div className="recentCallsImg">
                                        <img src={call} alt="" />
                                    </div>
                                    <div className="partHeader">
                                        <div className="partHead">ABC Company</div>
                                        <div className="partSubHead">Date</div>
                                        <div className="partSubHead">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src={msg2} alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src={[phone]} alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                            <div className="highlights" style={{ gap: '15px', paddingLeft: '10px' }} >
                                <div className="partHead" style={{ color: '#3F51B5', fonstSize: '15px' }}>Tuesday</div>
                                <div className="performanceHeadingData">
                                    <div className="recentCallsImg">
                                        <img src={call} alt="" />
                                    </div>
                                    <div className="partHeader">
                                        <div className="partHead">ABC Company</div>
                                        <div className="partSubHead">Date</div>
                                        <div className="partSubHead">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src={msg2} alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src={[phone]} alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homeBody3">
                        <div className="partHead" style={{ fontSize: '16px', fontWeight: '700' }} >To Do List</div>
                        <div className="homeBody3Part1">
                            <div className="partHead" style={{ fontSize: '15px', fontWeight: '700' }} >Today</div>
                            <div className="HoverWrapper">
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="homeBody3Part1">
                            <div className="partHead" style={{ fontSize: '15px', fontWeight: '700' }} >Yesterday</div>
                            <div className="HoverWrapper">
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="homeBody3Part1">
                            <div className="partHead" style={{ fontSize: '15px', fontWeight: '700' }} >Tuesday</div>
                            <div className="HoverWrapper">
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='homeBody1'>
                        <div className="homeBodyPerformance">
                            <div className="performanceHeading">
                                <div className="performanceHead">Team Performance</div>
                            </div>
                            <div className="performanceData">
                                <PieChart data={[
                                    
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
                            
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Home