import Portis from '@portis/web3';
import Web3 from 'web3';

export const portis = new Portis('', 'mainnet');
export const web3 = new Web3(portis.provider);
