import { AddressZero } from '@ethersproject/constants';
import { ethers } from 'ethers'
import { useState, useEffect } from 'react';
import cryptoPunksMarket_ABI from '../../abis/cryptoPunksMarket_ABI.json'
import punkAttributes from '../../punk-attributes.json'
import Table from './Table'
import TableContainer from '@material-ui/core/TableContainer';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';
import { useReducer } from 'react';

const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

const customProps = {
    display: 'flex',
    flexGrow: 0,
    boxShadow : 20,
    m: 1,
    borderRadius: 15,
    style: { height: '395px', borderRadius: '10', width:'800px',
paddingLeft: '10px', paddingTop: '10px', paddingRight: '10px',
paddingBottom: '10px'}
  }

const createData = (punkID, priceETH, type, attributeCount, block) => {
    return { punkID, priceETH, type, attributeCount, block };
}

const Feed = ({ usd }) => {

    const [feed, setFeed] = useState();

    useEffect(() => { 
        getRecentTransactions();
    },[])

    
    const getRecentTransactions = async () => {
        
        const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/gRR0KK-rRxTfSUdGd_g11RvpjrgCRN8a");
        const contract = new ethers.Contract(address, cryptoPunksMarket_ABI, provider);
        const now = await provider.getBlock();

        let endBlock = now.number;
        let startBlock = endBlock - 100000;

        const filter =  contract.filters.PunkBought();

        const events = await contract.queryFilter(filter, startBlock, endBlock)  
        const data = events.map(event => {
            const blockNumber = event.blockNumber;
            let punkIndex = event.args.punkIndex;
            let value = event.args.value;
            value = ethers.utils.formatUnits(value._hex);
            punkIndex = ethers.utils.formatUnits(punkIndex._hex).replace(/\./g, '');
            value = parseFloat(value).toFixed(2)
            console.log(value)
            punkIndex = parseInt(punkIndex, 10);
            
            return {
                block: blockNumber,
                time: '',
                punkIndex : punkIndex,
                priceInETH : value,
            }
        });
 
        const mappings = mapAttributes(data);
        setFeed(mappings); 
        console.log('FEED:', feed);    
    }

    const mapAttributes = (array) => {
        
        array.forEach(event => {
            punkAttributes.forEach(punk => {
                if(punk.id == event.punkIndex){
                    event.type = punk.type;
                    event.count = punk.count;
                }
            });
        });  
        return array
    }

    return (
        <div className="feed">
        {feed ? <Box {...customProps} ><Table  feed={feed} usd={usd}/></Box> : <div> loading </div>}
        </div>
    )
}

export default Feed
