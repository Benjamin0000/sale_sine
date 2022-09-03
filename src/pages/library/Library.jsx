import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './library.css'
import shape from '../../assets/shape.png'
import folder from '../../assets/folder.png'

export const datas = [
  { id: 1, heading: 'About ANC Company', folders: 1, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 2, heading: 'Department Overviews', folders: 0, calls: 4, createdBy: 'Brandy Hilbrand', lastUpdated: 'Dec 27, 2019' },
  { id: 3, heading: 'Sales Pitch - 3 Pillars', folders: 0, calls: 3, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 4, heading: 'Ideal Demo Flow', folders: 0, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Oct 27, 2020' },
  { id: 5, heading: 'About ANC Company', folders: 1, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 6, heading: 'Department Overviews', folders: 0, calls: 4, createdBy: 'Brandy Hilbrand', lastUpdated: 'Dec 27, 2019' },
  { id: 7, heading: 'Sales Pitch - 3 Pillars', folders: 0, calls: 3, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 8, heading: 'Ideal Demo Flow', folders: 0, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Oct 27, 2020' },
  { id: 9, heading: 'About ANC Company', folders: 1, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 10, heading: 'Department Overviews', folders: 0, calls: 4, createdBy: 'Brandy Hilbrand', lastUpdated: 'Dec 27, 2019' },
  { id: 11, heading: 'Sales Pitch - 3 Pillars', folders: 0, calls: 3, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 12, heading: 'Ideal Demo Flow', folders: 0, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Oct 27, 2020' },
]

export const datasp = [
  { id: 1, heading: 'About ANC Company', folders: 1, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 2, heading: 'Department Overviews', folders: 0, calls: 4, createdBy: 'Brandy Hilbrand', lastUpdated: 'Dec 27, 2019' },
  { id: 3, heading: 'Sales Pitch - 3 Pillars', folders: 0, calls: 3, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 4, heading: 'Ideal Demo Flow', folders: 0, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Oct 27, 2020' },
  { id: 5, heading: 'About ANC Company', folders: 1, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 6, heading: 'Department Overviews', folders: 0, calls: 4, createdBy: 'Brandy Hilbrand', lastUpdated: 'Dec 27, 2019' },
  { id: 7, heading: 'Sales Pitch - 3 Pillars', folders: 0, calls: 3, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 8, heading: 'Ideal Demo Flow', folders: 0, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Oct 27, 2020' },
  { id: 9, heading: 'About ANC Company', folders: 1, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  { id: 10, heading: 'Department Overviews', folders: 0, calls: 4, createdBy: 'Brandy Hilbrand', lastUpdated: 'Dec 27, 2019' },
  // { id: 11, heading: 'Sales Pitch - 3 Pillars', folders: 0, calls: 3, createdBy: 'Eran Hrbek', lastUpdated: 'Dec 18, 2019' },
  // { id: 12, heading: 'Ideal Demo Flow', folders: 0, calls: 4, createdBy: 'Eran Hrbek', lastUpdated: 'Oct 27, 2020' },
]

const Library = () => {

  const [state, setState] = useState({
    isPublic: true,
    isPrivate: false,
  })

  return (
    <>
      <Navbar type='library' />
      <div className="libraryWrapper">
        <div className="libraryHeader">
          <div className="libraryHead">LIBRARY</div>
        </div>
        <div className="libraryBody">
          <div className="libraryBodyHeader">
            <div className={state.isPublic ? "activeHead" : ""} onClick={() => setState({
              isPublic: true,
              isPrivate: false,
            })}>
              <div className="libraryHead" style={{ fontSize: '16px' }}>Public Folders</div>
              {state.isPublic && <div className="msgShape">
                <img src={shape} alt="" />
              </div>}
            </div>
            <div className={state.isPrivate ? "activeHead" : ""} onClick={() => setState({
              isPublic: false,
              isPrivate: true,
            })}>
              <div className="libraryHead" style={{ fontSize: '16px' }}>Private Folders</div>
              {state.isPrivate && <div className="msgShape">
                <img src={shape} alt="" />
              </div>}
            </div>
          </div>
          <div className="libraryBodyFolders">
            {state.isPublic &&
              <>
                <div className="noOfFolders">{datas.length} folders</div>
                <div className="AllFolders">
                  {
                    datas.map((data, i) => (
                      <div className="folders">
                        <div className="folderLine"></div>
                        <div className="folder">
                          <img src={folder} alt="" />
                          <div className="folderInsides">
                            <div className="folderName">{data.id}. {data.heading}</div>
                            <div className="folderSub"> {data.folders} folder {data.calls} calls </div>
                            <div className="createdBy">
                              <div className="folderSubs">Created by </div>
                              <div className="folderSub">{data.createdBy}</div>
                            </div>
                            <div className="createdBy">
                              <div className="folderSubs">Last updated </div>
                              <div className="folderSub">{data.lastUpdated}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </>
            }
            {state.isPrivate &&
              <>
                <div className="noOfFolders">{datasp.length} folders</div>
                <div className="AllFolders">
                  {
                    datasp.map((data, i) => (
                      <div className="folders">
                        <div className="folderLine"></div>
                        <div className="folder">
                          <img src={folder} alt="" />
                          <div className="folderInsides">
                            <div className="folderName">{data.id}. {data.heading}</div>
                            <div className="folderSub"> {data.folders} folder {data.calls} calls </div>
                            <div className="createdBy">
                              <div className="folderSubs">Created by </div>
                              <div className="folderSub">{data.createdBy}</div>
                            </div>
                            <div className="createdBy">
                              <div className="folderSubs">Last updated </div>
                              <div className="folderSub">{data.lastUpdated}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Library