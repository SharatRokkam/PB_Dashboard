import React from "react";
import Aside from "./Aside";
import MainSection from "./Main-Section";
import Progress from "./ProgressBar";
import '../style/Aside.css'

export default function Body() {
  return (
    <>
      <div style={{ display: "flex"}} className='parent-compo'>
        <div>
          <MainSection />
          <Progress />
        </div>
        <div>
          <Aside />
        </div>
      </div>
    </>
  );
}
