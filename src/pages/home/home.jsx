import React from 'react'
import'./home.css'
import Chart from '../../components/Chart/chart'
import Feed from '../../components/Feed/Feed'
import {testData} from '../../testData';
import Welcome from '../../components/Welcome/welcome'

export default function Home() {
    return (
        <div className='home'>
            <Welcome />
            <Chart title = 'cPunk Index' grid />
            <Feed tite="feed"/>
        </div>
    )
}

