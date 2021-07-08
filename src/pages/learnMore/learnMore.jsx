import React from 'react'
import'./learnMore.css'
import Grid from '@material-ui/core/Grid'

const learnMore = () => {
    return (
    <div className='learnMore'>
    <Grid container direction="column" > 
        <div className="textbox">
        <Grid container>
        <Grid item xs={12}>
        <h2>cPunk Pricing Model</h2> 
        </Grid>
            <div>Welcome to the Catalyst cPunk index, we have implemented hedonic regressions on CryptoPunk transactional history to derive the value of the market. Hedonic regressions are commonly applied in real estate, retail and economics. Hedonic pricing is a revealed-preference method to determine the relative importance of the variables which affect the price of a good or service. This pricing model is particularly useful for pricing CryptoPunks and the broader NFT market since they have specific attributes that give them value and all transactions are recorded on the blockchain.</div>
        </Grid> 
        </div>
 {/*         
        <Box height={30}>
        <ResponsiveContainer width='90%' aspect={4 / 1}>
            <div className="scatter-chart">
                <ScatterChart width={910} height={300}
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
        </Box>
 */}
        </Grid> 
    </div>
    )
}

export default learnMore
