/* eslint-disable */ 
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Input from './Input'
import { useState, useEffect } from 'react'
import appraisals from '../../punk-appraisals.json'

const customProps = {
    display: 'flex',
    flexGrow: 0,
    bgcolor: 'white',
    borderRadius: '20px',
    boxShadow : 8,
    m: 1,
    style: {height: '414px' },
  }

const innerBoxProps = {
    borderRadius: '20px',
    height: '100%',
    width: '100%',
    bgcolor: 'white',
    //eslint-disable-next-line
    borderRadius: '2',
    boxShadow: 1
}

const Calculator = ({ quote, setQuote, setType, type, attrCount, setAttrCount,
message, setMessage }) => {

    const [punkID, setPunkID] = useState(0);
    
    const getValue = (id) => {
        if(punkID != 0 && punkID != undefined){
            let result = appraisals.filter(quote => quote.id == id);
            if(result[0] != undefined){
                result = result[0].appraisal.toString();
                return '$'+ result;
            } else {
                setMessage(false)
            } 
        }
    }

    const getType = (id) => {
        if(punkID !==0 && punkID != undefined){
            let result = appraisals.filter(quote => quote.id == id);
            if(result[0] != undefined){
                result = result[0].skinType;
                return result.replace(/_/g, ' ');
            } else {
                setMessage(false)
            } 
        }
    }

    const getAttrCount = (id) => {
        if(punkID != 0 && punkID != undefined){
            let result = appraisals.filter(quote => quote.id == id);
            if(result[0] != undefined){
                result = result[0].count;         
                return result
            } else {
                setMessage(false)
            } 
        }
    }

    useEffect(() => {
        const type = getType(punkID);
        const quote = getValue(punkID);
        const attrCount = getAttrCount(punkID);
        setAttrCount(attrCount);
        setType(type);
        setQuote(quote);
        console.log('quote', quote)
        if(quote == undefined){
            setMessage(true)
        } else {
            setMessage(false)
        }
        // eslint-disable-next-line   
    },[punkID])

    return (
    <Box {...customProps}>
      <Grid container style={{
          paddingLeft: 10, 
          paddingRight: 8,
          paddingTop: 10,
          paddingBottom:10 }}>
          <Box {...innerBoxProps}>
            <Grid container direction="column" xs={12} align="center" style={{
                paddingLeft: 60, 
                paddingTop: 20,
                paddingRight:60}}>
                <h3>value a punk</h3>
            </Grid>
            <Grid container direction="column" xs={12} align="center" style={{
                paddingTop: 10}}>
                <Input 
                    setPunkID={setPunkID} 
                    getValue={getValue}/>
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="center" style={{
                paddingLeft: 10,
                paddingTop: 20}}>
                <h4>Value :</h4>
            <Grid container xs={6} justify="'flex-end'" alignItems="right">
                <h3>&nbsp;&nbsp;{quote}</h3>
            </Grid>    
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="center" style={{
                paddingLeft: 10,
                paddingTop: 20}}>
                <h4>Type : </h4>
                <Grid container xs={6} justify="'flex-end'" alignItems="right">
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;{type}</h3>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="center" style={{
                paddingLeft: 10,
                paddingTop: 20}}>
                <h4>Attribute Count : </h4>
                <Grid item  style={{paddingRight: 10}}>
                <h3>{attrCount}&nbsp;&nbsp;</h3>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{
                paddingLeft: 10,
                paddingTop: 20}}>
                {message? <h5>This Punk has not had enough transactional history to determine a price</h5> 
                : <div></div>}
            </Grid>    
            </Box>
      </Grid>
    </Box>
    )

}

export default Calculator