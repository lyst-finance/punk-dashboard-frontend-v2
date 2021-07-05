import './chart.css'
import chartData from '../../chart-data.json'
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const chart = ({title,data, dataKey, grid}) => {

    return (
        <div className = 'chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <AreaChart data={chartData}>
                    <defs>  
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#29abe3" stopOpacity={0.7}/>
                            <stop offset="75%" stopColor="#29abe3" stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <Area dataKey="usd" stroke="#29abe3" fill="url(#color)"/>
                    <XAxis dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={str => {
                            let arr = str.split(''); 
                            arr.splice(6,2)
                            return arr.join('')}}
                    />
                    <YAxis dataKey="usd" 
                        axisLine={false} 
                        tickLine={false} 
                        tickCount={8}
                        tickFormatter={number => `$${number}`}
                    />
                    <Tooltip />
                    <CartesianGrid opacity={0.3} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
            
        </div>
    )
}

export default chart
