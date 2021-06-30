import React from 'react'
import'./team.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Team() {
    return (
        <div className='teamInfo'>
            <div className="member">
            <Grid container spacing={2} justify='center'>
                <Grid item>
                    <Paper style={{height:300,width:300,borderRadius: 10}}>
                    <div className='picture'>
                    <img src="/images/Andre.jpg" className="photo" alt = '' />
                    </div>
                    <div className="info">
                        <h2>Andre Perez</h2>
                        <h3>Head of Business Dev.</h3>  
                         
                    </div>                 
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper style={{height:300,width:300,borderRadius: 10}}>
                    <div className='picture'>
                    <img src="/images/Aleks.jpeg" className="photo" alt = '' />
                    </div>
                    <div className="info">
                    <h2>Alex Vinogradov</h2>
                    <h3>Head of Development</h3> 
                    </div>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper style={{height:300,width:300,borderRadius: 10}}>
                    <div className='picture'>
                    <img src="/images/Bo.jpeg" className="photo" alt = '' />
                    </div>
                    <div className="info">
                    <h2>Bozorgmehr Jorjani</h2>
                    <h3>Head of Marketing</h3> 
                    </div>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{height:300,width:300,borderRadius: 10}}>
                    <div className='picture'>
                    <img src="/images/Richard.jpeg" className="photo" alt = '' />
                    </div>
                    <div className="info">
                    <h2>Richard Melkonian</h2>
                    <h3>Full Stack Dev.</h3> 
                    </div>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{height:300,width:300,borderRadius: 10}}>
                    <div className='picture'>
                    <img src="/images/Agnes.jpeg" className="photo" alt = '' />
                    </div>
                    <div className="info">
                    <h2>Agnes Kocsis</h2>

                    <h3>Financial Analyst</h3> 
                    </div>
                    </Paper>
                </Grid>

            </Grid>  
            </div>    
        </div>
    )
}
