import React from 'react'
import'./learnMore.css'
import { ScatterChart, XAxis, Scatter, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../scatter-data.json'

let scatterData = data.reverse();

console.log(data)

const learnMore = () => {
    return (
    <div className='learnMore'>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <div className="scatter-chart">
                <ScatterChart width={1100} height={300}
                    margin={{ top: 20, right: 20, bottom: 10, left: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis 
                        dataKey="priceInUSD"
                        axisLine={false} 
                        tickLine={false} 
                        tickCount={4}
                        tickFormatter={number => `$${number}`}/>
                    <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
                    <Legend />
                    <Scatter dataKey="usd" name="punk bought" data={scatterData} fill="#8884d8" />
                </ScatterChart>
            </div> 
        </ResponsiveContainer>
    </div>
    )
}

export default learnMore
