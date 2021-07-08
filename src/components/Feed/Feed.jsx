import { ethers } from 'ethers'
import { useState, useEffect } from 'react';
import cryptoPunksMarket_ABI from '../../abis/cryptoPunksMarket_ABI.json'
import punkAttributes from '../../punk-attributes.json'
import Calculator from './Calculator'
import Table from './Table'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

const customProps = {
    display: 'flex',
    flexGrow: 1,
    boxShadow : 20,
    m: 1,
    borderRadius: 15,
    style: { height: '395px', borderRadius: '10', width: '100%',
paddingLeft: '10px', paddingTop: '10px', paddingRight: '10px',
paddingBottom: '10px'}
  }

const Feed = ({ usd }) => {

    const [feed, setFeed] = useState();
    const [quote, setQuote] = useState();
    const [type, setType] = useState();
    const [attrCount, setAttrCount] = useState();
    const [message, setMessage] = useState(false);

    console.log(quote, type)

    useEffect(() => { 
        getRecentTransactions();
        // eslint-disable-next-line
    },[]);

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
    }

    const mapAttributes = (array) => {   
        array.forEach(event => {
            punkAttributes.forEach(punk => {
                if(punk.id === event.punkIndex){
                    event.type = punk.type;
                    event.count = punk.count;
                }
            });
        });  
        return array
    }

    return (
        <div className="feed">
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Calculator 
                        quote={quote} 
                        setQuote={setQuote}
                        type={type}
                        setType={setType} 
                        attrCount={attrCount}
                        setAttrCount={setAttrCount} 
                        message={message}
                        setMessage={setMessage}  
                        />
                </Grid>
                <Grid item xs={12} md={8}>
                {feed ? <Box {...customProps} ><Table feed={feed} usd={usd}/></Box> 
                : <CircularProgress />}
                </Grid>
            </Grid>
        </div>
    )
}

export default Feed
