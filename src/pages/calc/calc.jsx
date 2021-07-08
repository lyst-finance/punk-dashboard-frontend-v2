import React from 'react'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core';
import'./calc.css'


export default function calc() {
    return (
        <div>
            <div className="content1">
            <Grid container spacing={2} style={{
          paddingLeft: 10, 
          paddingRight: 8,
          paddingTop: 10,
          paddingBottom:10 }}>
                <Grid item className='box' xs={8}md={7}>
                    
                    <h1>CryptoPunk Price Calculator</h1>
                    

                </Grid>

                    <Grid item xs={12} md={7} className='text'>
                        <p>This is a fair market valuation calculator, by analysing real-time on-chain transactional data this calculator is able to estimate the value of any Punk based on it's traits</p>
                        
                                                <Grid container spacing={3}>
                                                <Grid item xs={12}> 
                                                    <TextField
                                                            fullWidth
                                                            variant='outlined'
                                                            label="Enter Punk ID"
                                                            />
                                                </Grid>

                                                <Grid item xs={12}>
                                                    Value :
                                                </Grid>

                                                <Grid item xs={12}>
                                                    Type :
                                                </Grid>

                                                <Grid item xs={12}>
                                                    Attribute Count :
                                                </Grid>
                        
                                                </Grid>
                        
                    </Grid>
                    

                </Grid>
                
                </div>
        </div>
    )
}
