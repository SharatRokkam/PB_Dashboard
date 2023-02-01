import React from 'react'
import '../style/Table.css'

export default function Table() {
  return (
    <div>
         <div className="performance-box">
          
            <table className='table-container' border={'1'} width={'100%'}>
              <tr>
                <th></th>
                <th>HTML</th>
                <th>CSS</th>
                <th>JS</th>
                <th>React</th>
                <th>NodeJS</th>
                <th>Mongo DB</th>
                <th colSpan={'3'}></th>
                
              </tr>
              <tr>
               <td></td>
               <td></td>
                <th></th>
                <th></th>
                <th></th>
                <td></td>
                <td></td>
                <th>Score</th>
                <td>Max possible in course</td>
                <td>Rank</td>
              </tr>
              <tr>
                <td>Assignments</td>
                <td>52%</td>
                <td>52%</td>
                <td>52%</td>
                <td>52%</td>
                <td>52%</td>
                <td>52%</td>
                <td>52%</td>
                <td>52%</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Projects</td>
                <td>31%</td>
                <td>31%</td>
                <td>31%</td>
                <td>31%</td>
                <td>31%</td>
                <td>31%</td>
                <td>31%</td>
                <td>31%</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Assessments</td>
                <td>68%</td>
                <td>68%</td>
                <td>68%</td>
                <td>68%</td>
                <td>68%</td>
                <td>68%</td>
                <td>68%</td>
                <td>68%</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Mock Interviews</td>
                <td>72%</td>
                <td>72%</td>
                <td>72%</td>
                <td>72%</td>
                <td>72%</td>
                <td>72%</td>
                <td>72%</td>
                <td>72%</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
             
              <tr>
                <td>Rank</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
             
            </table>
        </div>
    </div>
  )
}
