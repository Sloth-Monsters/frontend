import Portis from '@portis/web3';
import Web3 from 'web3';

console.log("This is portis id", process.env.REACT_APP_PORTIS_ID);

// export const portis = new Portis(process.env.PORTIS_ID, 'ropsten')
export const portis = new Portis(process.env.REACT_APP_PORTIS_ID, 'ropsten');
export const web3 = new Web3(portis.provider);

const SuperfluidSDK = require("@superfluid-finance/js-sdk");

export const sf = new SuperfluidSDK.Framework({
    web3: web3,
    tokens: ['fDAI', 'fUSDC']
});

sf.initialize()
