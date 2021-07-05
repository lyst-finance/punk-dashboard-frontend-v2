import React from 'react'
import './welcome.css'
import Grid from '@material-ui/core/Grid'

export default function Welcome() {
    return (
            
            <Grid container>
                <Grid item xs={4} container={"true"} justify={"center"}>
                <div className="headings">
                    <Grid container>
                        <Grid item xs ={12}>
                        <h1>Welcome!</h1>
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
                        <h2>cPunk Index </h2>
                        </Grid>
                        <Grid item xs ={12}>
                        <h1>$570.78</h1>
                        </Grid> 
                    </Grid> 
                    </div>                                  
                </Grid>
                <Grid item xs={4} container={"true"} justify={"center"}>
                    <div className="headings">
                    <Grid container>
                        <Grid item xs ={12} >
                        <h2>Weekly Volume </h2>
                        </Grid>
                        <Grid item xs ={12} >       
                        <h1>$3,528,231.64</h1>
                        </Grid> 
                    </Grid>
                    </div>
                </Grid>
            </Grid>      
            
    )
}
