import React from 'react'
import './trackers.css'
import Chart from 'react-google-charts'
import ellipse from '../../assets/Ellipse.png'

export const data = [
  ['sno', 'number'],
  ['', 90],
  ['', 45],
  ['', 225],
]

export const options = {
  legend: "none",
  title: '',
  pieSliceText: "none",
  backgroundColor: "transparent"
}
const Trackers = () => {

  return (
    <div className='trackersWrapper'>
      <div className="trackersWrapperPart1">
        <div className="trackers1Header">
          <div className="trackers1HeaderHeading">Trackers</div>
          <div className="trackers1HeaderSub">Percentage of calls where each tracker was detected(based on 17 calls)</div>
        </div>
        <div className="trackers1Body">
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Objections- Demo</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Economic Buyer- Demo</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Decision Criteria- Demo</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Competitors- Demo</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Microeconomic Risk</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Sales Methodology</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Discount- Demo</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Pitch Script</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Impact Questions</div>
            <div className="bodyPartPie">
              <Chart options={options} data={data} chartType="PieChart" width={'120px'} height={'120px'} />
            </div>
            <div className="percent">88%</div>
          </div>
        </div>
      </div>
      <div className="trackersWrapperPart2">
        <div className="trackers2Header">
          <div className="trackers2HeaderHeading">Details</div>
        </div>
        <div className="trackers2Body">
          <div className="trackers2BodyImg">
            <img src={ellipse} alt="" />
          </div>
          <div className="trackers2BodyDetails">
            <div className="trackers2BodyDetail">Name :</div>
            <div className="trackers2BodyDetail">Mobile :</div>
            <div className="trackers2BodyDetail">Email :</div>
            <div className="trackers2BodyDetail">Work :</div>
            <div className="trackers2BodyDetail">Status :</div>
          </div>
          <div className="trackers2BodyLine"></div>
          <div className="trackers2BodyCalls">
            <div className="trackers2BodyCallsHead">
              <div className="trackers2BodyCallsHeader">Last 10 calls</div>
            </div>
            <div className="trackers2BodyCallsHead">
              <div className="trackers2BodyCallsHeader">ABC Company</div>
              <div className="trackers2BodyCallsSub">July 18, 2022</div>
            </div>
            <div className="trackers2BodyCallsHead">
              <div className="trackers2BodyCallsHeader">Conversation</div>
              <div className="trackers2BodyCallsSub">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed eum ipsa similique ducimus voluptas labore odit, voluptatum architecto quam vel asperiores ipsum, et voluptatem quidem porro saepe odio. Voluptates.</div>
            </div>
            <div className="trackers2BodyMore">View 2 more ..</div
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trackers