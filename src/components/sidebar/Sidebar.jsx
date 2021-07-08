import React from 'react'
import './Sidebar.css'

import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SchoolIcon from '@material-ui/icons/School';
/*
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import {IconContext} from "react-icons"
import {SiDiscord} from "react-icons/si"
import {AiOutlineMedium} from 'react-icons/ai'
import Grid from '@material-ui/core/Grid'
*/

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <divs className='sidebarWrapper'>
                <div className="sidebarMenu">
                <div className='logo'>
                    <img src="/images/logo.png" alt = '' />
                </div>
                <div className='logosmall'>
                    <img src="/images/logosmall.png" alt = '' />
                </div>

                    <ul className="sidebarList">
                        <Link to="/" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <HomeIcon className='sidebarIcon'/>
                            <h3>Home</h3>
                        </li>
                        </Link>
                        <Link to="/learnmore" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <SchoolIcon className='sidebarIcon'/>
                            <h3>Learn</h3>
                        </li>
                        </Link>
                        <Link to="/calc" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <MonetizationOnIcon className='sidebarIcon'/>
                            <h3>Calc</h3>
                        </li>
                        </Link>
                        <Link to="/borrow" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <AccountBalanceWalletIcon className='sidebarIcon'/>
                            <h3>Borrow</h3>
                        </li>
                        <Link to="/farm" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebarIcon'/>
                            <h3>Farm</h3>
                        </li>
                        </Link>
                        </Link>
                        <Link to="/team" className="link" style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <GroupIcon className='sidebarIcon'/>
                            <h3>Team</h3>
                        </li>
                        </Link>
                        <a href = 'https://docs.lyst.finance/catalyst/'style={{ textDecoration: 'none' }}>
                        <li className="sidebarListItem">
                            <DescriptionIcon className='sidebarIcon'/>
                            <h3>Docs</h3>
                        </li>
                        </a>
                    </ul>
                </div>
                <div className='bottom'>
                  </div>
{/*}
                    <div className='icons'>
                    <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-end"
                            >
                        <Grid item xs={3}>
                        <a href='https://t.me/catalyst_fi'>
                            <TelegramIcon style={{ color: 'white' }}/>
                        </a>                                  
                        </Grid>
                        <a href='https://twitter.com/catalyst_fi'>
                            <TwitterIcon style={{ color: 'white' }}/>   
                        </a>
                        <Grid item xs={3}>
                        <a href='https://github.com/lyst-finance/hackmoney-cryptopunk-feed'>
                            <GitHubIcon style={{ color: 'white' }}/>
                        </a>
                        </Grid>
                        <Grid item xs={3}>
                            <IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
                            <a href="https://discord.gg/WjPUm2EWxs">
                            <SiDiscord />
                            </a>
                            </IconContext.Provider>
                            </Grid>
                            <Grid item xs={3}>
                            <IconContext.Provider value={{ style: 
                            {fontSize: '30px', color: "white", paddingBottom: '10px'}}}>
                            <a href="https://blog.lyst.finance/">
                            <AiOutlineMedium />
                            </a>
                            </IconContext.Provider>
                            </Grid>
                        </Grid>
                    </div>
                    */}  
            </divs>   
                            
        </div>
    )
}
