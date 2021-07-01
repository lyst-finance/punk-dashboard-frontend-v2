import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import'./home.css'
import Chart from '../../components/Chart/chart'
import Feed from '../../components/Feed/Feed'
import {testData} from '../../testData';
import Welcome from '../../components/Welcome/welcome'

export default function Home() {

    const [usd, setUsd] = useState();

    useEffect(() => {
        axios
        .get(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        )
        .then(res => {
            setUsd(res.data.ethereum.usd)
            console.log(res.data.etherum.usd)
        })
        .catch(error => console.log(error))
    },[])
    

    return (
        <div className='home'>
            <Welcome />
            <Chart title = 'cPunk Index' grid />
            <Feed tite="feed" usd={usd}/>
        </div>
    )
}

