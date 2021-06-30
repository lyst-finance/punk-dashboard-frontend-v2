import React from 'react'
import'./topbar.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';



export default function Topbar(){
    return(
<div className ='topbar'>
    <div className='topbarWrapper'>
        <div className='topLeft'>
        <img src="/images/logo.png" alt = '' />
        </div>

        <div className='topRight'>
            <a href='https://t.me/catalyst_fi'>
                <div className="topbarIconContainer">
                    <TelegramIcon />
                    <span className="topIconBadge"></span>
                </div>
            </a>

            <a href='https://twitter.com/catalyst_fi'>
            <div className="topbarIconContainer">
                <TwitterIcon />
                <span className="topIconBadge"></span>
            </div>
            </a>
            <a href='https://github.com/lyst-finance/hackmoney-cryptopunk-feed'>
            <div className="topbarIconContainer">
                <GitHubIcon />
                <span className="topIconBadge"></span>
            </div>
            </a>

        </div>

    </div>
</div>

    )
}