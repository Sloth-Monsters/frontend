import CeramicClient from '@ceramicnetwork/http-client';
import { ThreeIdConnect,  EthereumAuthProvider } from '3id-connect';
import { IDX } from '@ceramicstudio/idx';

const initCeramic = async (addr) => {

  /**** Ceramic Client ****/
  const CERAMIC_URL = "https://ceramic-clay.3boxlabs.com" // TODO :: change
  /* community dev :: https://ceramic-clay.3boxlabs.com :: R/W claynet, wiped often
    persistent storage :: https://yourEndpoint.com :: R/W claynet 
    localhost:7007 :: duh */
  const ceramic = new CeramicClient(CERAMIC_URL)
  /**end** Ceramic Client ****/
  
  /**** IDX ****/
  const aliases = require('../aliases.json')
  const idx = new IDX({ ceramic, aliases })
  console.log(ceramic,idx)
  /**end** IDX ****/
  
  /**** Set Ceramic Provider and return ****/
  return new Promise( async (resolve) => {
    const addresses = await window.ethereum.enable()
    const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
    const threeIdConnect = new ThreeIdConnect()
    const conn = await threeIdConnect.connect(authProvider)
    const provider = await threeIdConnect.getDidProvider()
    const conf = await ceramic.setDIDProvider(provider)
    console.log(ceramic)
    console.log(idx)
    console.log(addresses)
    console.log(authProvider)
    console.log(threeIdConnect)
    console.log(provider)
    console.log(ceramic.context.did._id)
    resolve([ceramic, idx, addresses[0], ceramic.context.did._id])
  });
}

export default initCeramic;