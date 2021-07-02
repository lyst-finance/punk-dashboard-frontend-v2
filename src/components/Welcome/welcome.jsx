import React from 'react'
import './welcome.css'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'


export default function Welcome() {
    return (
            
            <Grid container>
                <Grid item xs={4} container={"true"} justify={"center"}>
                <div className="headings">
                    <Grid container>
                        <Grid item xs ={12}>
                        <h1>welcome to Catalyst</h1>
                        </Grid>
                        <Grid item xs ={12}>
                        <p>cPunk is a price feed derived using hedonic linear regressions and <br></br>real-time on-chain data</p>
                        </Grid>
                    </Grid>
                </div>
                </Grid>
                <Grid item xs={4} container={"true"} justify={"center"}> 
                <div className="headings"> 
                    <Grid container> 
                        <Grid item xs ={12}>
                        <h2><i>cPunk Index </i></h2>
                        </Grid>
                        <Grid item xs ={12}>
                        <h1><i>$570.78</i></h1>
                        </Grid> 
                    </Grid> 
                    </div>                                  
                </Grid>
                <Grid item xs={4} container={"true"} justify={"center"}>
                    <div className="headings">
                    <Grid container>
                        <Grid item xs ={12} >
                        <h2>weekly volume </h2>
                        </Grid>
                        <Grid item xs ={12}>       
                        <h1><i>$3,528,231.64</i></h1>
                        </Grid> 
                    </Grid>
                    </div>
                </Grid>
            </Grid>      
            
    )
}
