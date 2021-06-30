import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <divs className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <ul className="sidebarList">

                        <Link to="/" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <HomeIcon className='sidebarIcon'/>
                            Home
                        </li>
                        </Link>
                        <Link to="/" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <LineStyleIcon className='sidebarIcon'/>
                            Learn More
                        </li>
                        </Link>
                        <Link to="/team" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <GroupIcon className='sidebarIcon'/>
                            Meet the Team
                        </li>
                        </Link>
                        <a href = 'https://docs.lyst.finance/catalyst/'style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <DescriptionIcon className='sidebarIcon'/>
                            Documentation
                        </li>
                        </a>

                    </ul>

                </div>

            </divs>

            
        </div>
    )
}
