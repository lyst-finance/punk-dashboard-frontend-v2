import React from 'react'
import './welcome.css'
import Grid from '@material-ui/core/Grid'

export default function Welcome() {
    return (
            <div className="containerTest">

                
                <div className="headings">
                    <Grid container >
                        <Grid item xs ={12}>
                        <h1>Welcome!</h1>
                        </Grid>
                        <Grid item xs ={12}>
                        <p>cPunk is a synthetic derivative for CryptoPunks. It’s based on a price feed derived using hedonic linear regressions and real-time on-chain data</p>
                        </Grid>
                    </Grid>
                </div>
                
                
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
               
           
            </div>    
            
    )
}
