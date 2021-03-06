import React from 'react'
import'./topbar.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import {IconContext} from "react-icons"
import {SiDiscord} from "react-icons/si"
import {AiOutlineMedium} from 'react-icons/ai'



export default function Topbar(){
    return(
<div className ='topbar'>
    <div className='topbarWrapper'>
        
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
            
            <div className="topbarIconContainer">
            <IconContext.Provider value={{ style: {fontSize: '30px', color: "gray"}}}>
                            <a href="https://discord.gg/WjPUm2EWxs">
                            <SiDiscord />
                            </a>
                            </IconContext.Provider>
            </div>
        
            <div className="topbarIconContainer">
            <IconContext.Provider value={{ style: 
                            {fontSize: '30px', color: "gray", paddingBottom: '5px'}}}>
                            <a href="https://blog.lyst.finance/">
                            <AiOutlineMedium />
                            </a>
                            </IconContext.Provider>
            </div>
 

    </div>
</div>

    )
}