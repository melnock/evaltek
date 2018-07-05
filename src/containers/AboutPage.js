import React from 'react'

class AboutPage extends React.Component {
  render(){

    return(
      <div className="about">
        <div id="basic-info">
          <h2> Founded 2004 </h2>
          <span className="filler-about"></span>
          <span className="filler-about"></span>
          <h2> Located in Norfolk, VA </h2>
          <h2> Certified Woman-Owned Small Business (WOSB) </h2>
          <span className="filler-about"></span>
          <span className="filler-about"></span>
          <h2> More than 25 years of Navy/Marine Corps Operational experience</h2>
        </div>
        <div id="specializations">
          <h2>Specializing in </h2>
            <ul>
              <li>engineering analysis, design, development and management;</li>
              <li>development of integrated, customized engineering solutions; </li>
              <li>analysis of missions, program goals and objectives; </li>
              <li>requirement analysis and assessment. </li>
            </ul>
        </div>
          Their customer base includes clients in the
          commercial sector
          Federal Government:
          U.S. Navy and the U.S. Army.
      </div>
    )

  }


}

export default AboutPage
