import React from 'react'
import'./topbar.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function Topbar(){
    return(
<div className ='topbar'>
    <div className='topbarWrapper'>
        <div className='topLeft'>
        <span className="logo">Catalyst</span> 
        </div>

        <div className='topRight'>
            <div className="topbarIconContainer">
                <NotificationsNoneIcon />
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <TwitterIcon />
                <span className="topIconBadge"></span>
            </div>
            <div className="topbarIconContainer">
                <SettingsIcon />
                <span className="topIconBadge"></span>
            </div>

        </div>

    </div>
</div>

    )
}