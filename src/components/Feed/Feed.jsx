import { AddressZero } from '@ethersproject/constants';
import { ethers } from 'ethers'
import { axios } from 'axios'
import { useState, useEffect } from 'react';
import cryptoPunksMarket_ABI from '../../abis/cryptoPunksMarket_ABI.json'
import punkAttributes from '../../punk-attributes.json'
import Table from './Table'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

const createData = (punkID, priceETH, type, attributeCount, block) => {
    return { punkID, priceETH, type, attributeCount, block };
}

const Feed = () => {

    const [feed, setFeed] = useState();

    const getRecentTransactions = async () => {
        
        const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/gRR0KK-rRxTfSUdGd_g11RvpjrgCRN8a");
        const contract = new ethers.Contract(address, cryptoPunksMarket_ABI, provider);
        const now = await provider.getBlock();

        let endBlock = now.number;
        let startBlock = endBlock - 10000;

        const filter =  contract.filters.PunkBought();

        const events = await contract.queryFilter(filter, startBlock, endBlock)  
        const data = events.map(event => {
            console.log(event)
            const blockNumber = event.blockNumber;
            let punkIndex = event.args.punkIndex;
            let value = event.args.value;
            value = ethers.utils.formatUnits(value._hex);
            punkIndex = ethers.utils.formatUnits(punkIndex._hex)
            .replace(/\./g, '');
            punkIndex = parseInt(punkIndex, 10);
            return {
                block: blockNumber,
                time: '',
                punkIndex : punkIndex,
                priceInETH : value,
                
            }
        });
 
        const mappings = mapAttributes(data);
        console.log(mappings);
        setFeed(mappings);     
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


    useEffect(() => {
        getRecentTransactions();
    },[])


    return (
        <div className="feed">
        {feed ? <Table  feed={feed}/> : <div> loading </div>}
        </div>
    )
}

export default Feed
