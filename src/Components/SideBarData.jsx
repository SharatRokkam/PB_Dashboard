import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as RxIcons from "react-icons/rx";
import * as TbIcons from "react-icons/tb";




export const SideBarData = [
    {
        title : 'Recorded',
        path : '/Recorded',
        icon : <RiIcons.RiRecordCircleFill />  ,   
        cName : 'nav-text'
    },
    {
        title : 'Dashboard',
        path : '/',
        icon : <RxIcons.RxDashboard />  ,   
        cName : 'nav-text'
    },
    {
        title : 'Coding Assignments',
        path : '/CodingAssignments',
        icon : <RiIcons.RiCodeSSlashLine />  ,   
        cName : 'nav-text'
    },
    {
        title : 'Course Details',
        path : '/',
        icon : <AiIcons.AiOutlineFileSearch />  ,   
        cName : 'nav-text'
    },
    {
        title : 'Assessments',
        path : '/',
        icon : <TbIcons.TbFileHorizontal />  ,   
        cName : 'nav-text'
    },
    {
        title : 'Projects',
        path : '/',
        icon : <AiIcons.AiFillFile/>  ,   
        cName : 'nav-text'
    },
    {
        title : 'Mock Interviews',
        path : '/',
        icon : <IoIcons.IoMdChatboxes />  ,   
        cName : 'nav-text'
    },
    
    
]
