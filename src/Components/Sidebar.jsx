import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SideBarData} from './SideBarData';
import './SideBar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{color: 'Grey' }}>
        <div style={{display:'flex', justifyContent:'space-between'}} className="header">
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg" alt="" className='logo' width={'200px'}/>
         </div>
        <div className='content'>Content Contest</div>
        <div style={{display:'flex'}}>
          <div className='circle'>
            <span>E</span>
          </div>
          <h2 className='elevation-text'>Hi Elevation</h2>
        </div>
        </div>
        <nav className={sidebar ? 'nav-menu' : 'nav-menu active' }>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;