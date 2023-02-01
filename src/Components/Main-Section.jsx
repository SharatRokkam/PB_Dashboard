import React, { useState } from "react";
import "../style/main-Section.css";
import Table from "./Table";
import Toggle from "./Toggle";


export default function MainSection() {
  const [toggle, setToggle] = useState(true);
  const[button, setButton] = useState('')
  const handleClick = () => {
    setToggle(!toggle);
    setButton("hide-button")
  };

  return (
    <>
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
        {toggle ?<Toggle/> :<Table/>  }
        <div className={button}>
        <button  className="detailed {button}" onClick={handleClick}>View Journey Detailed Overview</button>
        </div>
       </div>
    </>
  );
}
