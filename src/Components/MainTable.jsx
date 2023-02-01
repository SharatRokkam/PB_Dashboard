import React from "react";
import "../style/main-Section.css";
export default function MainSection() {
  return (<>
      <div className="container">
        <div>
          <img
            src="../images/img3.png"
            alt=""
            width={"30px"}
            className="icon"
          />
          <span className="title">
            Batch code : <strong>EA30</strong>{" "}
          </span>
        </div>
        <div>
          <img
            src="../images/img2.png"
            alt=""
            width={"30px"}
            className="icon"
          />
          <span className="title">
            Enrolment Date : <bold>27 Dec 2022</bold>{" "}
          </span>
        </div>
        <div className="light-icon">
          <img src="../images/img1.png" alt="" className="icon" />
          <span className="title">Improvement Tips by Mentors</span>
        </div>
      </div>
      <div className="performance-bar">
        <h1>Overall Performance</h1>
        <div className="range-all">
          <div className="range-bar">45%</div>
          <div className="range-bar2"></div>
        </div>
       <Impnt-Toggle/>
       
        {/* <a href="/able.jsx" className="detailed">View Journey Detailed Overview</a> */}
       </div>
    </>
  );
}
