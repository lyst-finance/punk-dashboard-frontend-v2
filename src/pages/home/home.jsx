import React from 'react'
import'./home.css'
import Chart from '../../components/Chart/chart'
import {testData} from '../../testData';
import Welcome from '../../components/Welcome/welcome'

export default function Home() {
    return (
        <div className='home'>
            <Welcome />
            <Chart data ={testData} title = 'cPunk Index' grid dataKey='price'/>
            
        </div>
    )
}

