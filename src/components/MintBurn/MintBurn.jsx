import './MintBurn.css'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function MintBurn() {
    return (
        <div className="form">
          <Grid container spacing={3} style={{
          paddingLeft: 10, 
          paddingRight: 8,
          paddingTop: 10,
          paddingBottom:10 }}>

                <Grid item md={8} xs={12}>
                    <h1>Mint & Collateral</h1>
                </Grid>
                <Grid item md={7} xs={12}>
                <Grid container className='fields' spacing={3} style={{
          paddingLeft: 10, 
          paddingRight: 8,
          paddingTop: 10,
          paddingBottom:10 }} >
                <Grid item  xs={12} >
                        <TextField
                                    fullWidth
                                    variant='outlined'
                                    label="Deposit ETH as Collateral"
                                    />
                </Grid>
                <Grid item  xs={12}>
                        <Button
                                    fullWidth
                                    variant='outlined'
                                >
                                        
                                    
                                    Deposit
                                    </Button>
                </Grid>
               
                <Grid item xs={12}>
  
                        <TextField  fullWidth
                                    variant='outlined'
                                    label="Mint cPunk"
                                    />

                </Grid>
                <Grid item xs={12}>
                        <Button
                                    fullWidth
                                    variant='outlined'>
                                    Mint
                                    </Button>
                </Grid>
                <Grid item xs={12}>

                        <TextField
                                    fullWidth
                                    variant='outlined'
                                    label="Burn cPunk"
                                    />
                    
                </Grid>
                <Grid item xs={12}>
                <Grid container >
                <Grid item xs={6}>
                                    <Button
                                    fullWidth
                                    variant='outlined'>
                                    Approve
                                    </Button>
                </Grid>

                <Grid item xs={6}>
                                    <Button
                                    fullWidth
                                    variant='outlined'>
                                    Burn
                                    </Button>
                </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>

                    <TextField
                        fullWidth
                        variant='outlined'
                        label="Withdraw ETH"
                         />

                </Grid>
                <Grid item xs={12}>
                        <Button
                                    fullWidth
                                    variant='outlined'>
                                    Withdraw
                                    </Button>

                </Grid>
            </Grid>
            </Grid>
            </Grid>

        </div>
    )
}
