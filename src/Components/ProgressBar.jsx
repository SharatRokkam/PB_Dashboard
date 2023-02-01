import React from 'react'
import "../style/ProgressBar.css";
import Aside from './Aside';

export default function Progress() {
  return (
    <>
  
      <div className='container1'>
        <div className='content1'>
          <h3>Track Levels</h3>
          <p>Attain 50% to <span className='unlock'>unlock Level 3</span></p>
        
          <div className='start'>
            <div style={{marginTop:'15px'}}>
            {/* <span className='zero'>0</span> */}
              <img src="../images/Group 2282.png" alt="" width={'85em'} />
              <h5 className='persentage'>0%</h5>
            </div>
            <div className='margin-left'>
            {/* <span className='zero'>1</span> */}
            <img src="../images/Group 2282.png" alt="" width={'85em'} />
              <h5 className='persentage'>10%</h5>
            </div>
            <div className='margin-left'>
            {/* <span className='zero'>2</span> */}
            <img src="../images/Group 2282.png" alt="" width={'85em'} />
              <h5 className='persentage'>30%</h5>
            </div>
            <div className='margin-left'>
               <img src="../images/Group 2287.png" alt="" width={'85em'} />
              <h5 className='persentage lock'>50%</h5>
            </div>
            <div className='margin-left'>
              
               <img src="../images/Group 2287.png" alt="" width={'85em'} />
              <h5 className='persentage lock'>70%</h5>
            </div>
            <div className='margin-left'>
               <img src="../images/Group 2287.png" alt="" width={'85em'} />
              <h5 className='persentage lock'>90%</h5>
            </div>
            <div className='margin-left'>
             
              <img src="../images/Speech Bubble.png" alt="" className='Green-trick' />
               <img src="../images/Group 4911.png" alt="" className='image10'  />
              <h5 className='persentage nine lock'></h5>
            </div>
          </div>
          <img src="../images/Group 2290.png" alt="" className='message'/>
        </div>
        <div className='content2'>
          <img src="../images/Mask Group 17.png" alt="" className='image09' />
          <img src="../images/Rectangle.png" alt=""  width={'200em'}/>
          <div className='redeem'>
            <h5>Redeem coins</h5>
            <h5>and get exciting goodies</h5>
            <img src="../images/Group 2276.png" alt="" className='pd-coins'/>
            <span id='coins'>45</span>
            <br />
            <button className='earn-button'>Earn Now</button>
          </div>
        </div>
      </div>
      <div className='container1'>
        <div className='content3'>
        <span className='handson1'>HandsOn</span>
        <h3 className='number1'>2</h3>
          <span className='handson2'>Assessment</span>
          <h3 className='number2'>18</h3>
          <span className='handson3'>Projects</span>
          <h3 className='number3'>10</h3>
          <span className='handson4'>Mock Interview</span>
          <h3 className='number4'>15</h3>
          <div className='imagesall'>
          <img src="../images/Line 54.png" alt="" className='image1' />
          <img src="../images/Line 53.png" alt="" className='image2'/>
          <img src="../images/Group 4828.png" alt="" className='image3' />
         </div>
          <h4>Complete and Win <br/> More Coins</h4>
        </div>
        <div className='content4'>
          <div className='title-content4'>
            <div className='title-number'>
            <h5><span className='number number5' id='number'>20</span> Plagiarisms Found</h5>
            </div>
            <div className='title-number6'>
            <h5><span className='number number6'>12</span> Late Submissions</h5>
            </div>
            <div className='title-number7'>
            <h5><span className='number number7'>28</span> Pending Submissions</h5>
            </div>
           
           
          </div>
          <div className='content5'>
            <div>
            <h5 className='content5-h5'>HandsOn</h5>
            <h4 className='content5-h4'>2/5</h4>
            </div>
            <div>
            <h5 className='content5-h5'>Assessments</h5>
            <h4 className='content5-h4'>8/12</h4>
            </div>
            <div>
            <h5 className='content5-h5'>Projects</h5>
            <h4 className='content5-h4'>15/16</h4>
            </div>
            <div>
            <h5 className='content5-h5'>Mock Interview</h5>
            <h4 className='content5-h4'>2/4</h4>
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  )
}
