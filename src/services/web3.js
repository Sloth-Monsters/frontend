import Portis from '@portis/web3';
import Web3 from 'web3';

// export const portis = new Portis(process.env.PORTIS_ID, 'ropsten')
export const portis = new Portis(process.env.REACT_APP_PORTIS_ID, 'ropsten');
export const web3 = new Web3(portis.provider);
