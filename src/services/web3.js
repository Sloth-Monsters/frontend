import Portis from '@portis/web3';
import Web3 from 'web3';

export const portis = new Portis('93d3e2cb-d7b1-4363-a41c-748e68d4a13f', 'ropsten');
export const web3 = new Web3(portis.provider);
