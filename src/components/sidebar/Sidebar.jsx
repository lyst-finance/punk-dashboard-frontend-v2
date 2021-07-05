import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import {IconContext} from "react-icons"
import {SiDiscord} from "react-icons/si"
import {AiOutlineMedium} from 'react-icons/ai'
import Grid from '@material-ui/core/Grid';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <divs className='sidebarWrapper'>
                <div className="sidebarMenu">
                <div className='logo'>
                    <img src="/images/logo.png" alt = '' />
                </div>
                    <ul className="sidebarList">
                        <Link to="/" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <HomeIcon className='sidebarIcon'/>
                            Home
                        </li>
                        </Link>
                        <Link to="/learnmore" className="link" style={{ textDecoration: 'none' }}>
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
                <div className='bottom'>
                  </div>
                    <div className='icons'>
                    <Grid container spacing={2} justify="center" >            
                        <Grid item xs={2}>  
                        <a href='https://t.me/catalyst_fi'>
                            <TelegramIcon style={{ color: 'white' }}/>
                        </a>                                  
                        </Grid>
                        <Grid item xs={2}>
                        <a href='https://twitter.com/catalyst_fi'>
                            <TwitterIcon style={{ color: 'white' }}/>   
                        </a>
                        </Grid>
                        <Grid item xs={2}>
                        <a href='https://github.com/lyst-finance/hackmoney-cryptopunk-feed'>
                            <GitHubIcon style={{ color: 'white' }}/>
                        </a>
                        </Grid>
                        <Grid item xs={2}>
                            <IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
                            <a href="https://discord.gg/WjPUm2EWxs">
                            <SiDiscord />
                            </a>
                            </IconContext.Provider>
                        </Grid>
                        <Grid item xs={2}>
                            <IconContext.Provider value={{ style: 
                            {fontSize: '30px', color: "white", paddingBottom: '10px'}}}>
                            <a href="https://blog.lyst.finance/">
                            <AiOutlineMedium />
                            </a>
                            </IconContext.Provider>
                        </Grid>

                    </Grid>
                    </div>
            </divs>     
        </div>
    )
}
