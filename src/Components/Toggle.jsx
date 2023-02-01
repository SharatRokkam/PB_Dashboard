import React from 'react'

export default function Toggle() {
  return (
    <div>
         <div className="performance-box">
            <div className="performance-item">
                <img src="../images/img4.png" alt="" className="item-img" />
                <div className="score">
                    <h3>Score</h3>
                    <h2 style={{opacity:'2'}}>180/250</h2>
                </div>
            </div>
            <div className="performance-item">
                <img src="../images/img6.png" alt="" className="item-img" />
                <div className="score">
                    <h3>Rank</h3>
                    <h2 style={{opacity:'2'}}>18</h2>
                </div>
            </div>
            <div className="performance-item">
                <img src="../images/img5.png" alt="" className="item-img" />
                <div className="score">
                    <h3>Attendance</h3>
                    <h2 style={{opacity:'2'}}>37/100</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
