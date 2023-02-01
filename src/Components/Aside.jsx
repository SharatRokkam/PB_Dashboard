import React from "react";
import "../style/Aside.css";

export default function Aside() {
  return (
    <>
      <div className="Aside-main-bar">
        <div className="Aside-bar">
          <div className="Aside-border">
            <div className="pointer">
              <img src="../images/Ellipse 398.png" alt="" width={"13px"} />
              <span style={{ fontSize: " 13px" }}>LIVE CLASS</span>
            </div>
            <div className="decisionMAking">
              <h5>Decision Making</h5>
              <p>Java Script</p>
            </div>
            <hr />
            <div
              style={{
                display: "flex",

                justifyContent: "space-between",
              }}
              className="date"
            >
              <div>
                <img src="../images/img3.png" alt=""  style={{width:'20px'}}/>
                <span>5th Dec' 22</span>
              </div>
              <div>
                <img src="" alt="" />
                <span>7:00 PM</span>
              </div>
            </div>
            <hr />
            <div className="" style={{ backgroundColor: "rgb(224 234 244);" }}>
              <img
                src="../images/zooom.png"
                alt=""
                width={"40px"}
                style={{ marginLeft: "7px" }}
              />
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="performer"
          >
            <div className="perfomer">Top Perfomers</div>
            <div className="compare-btn">Compare</div>
          </div>
          <div>
            <img
              src="../images/Group 4872.png"
              alt=""
              width={"140em"}
              style={{ marginLeft: "2em" }}
            />
          </div>
          <div>
            <img src="../images/table.png" alt="" width={"200em"} />
          </div>
        </div>
      </div>
    </>
  );
}
