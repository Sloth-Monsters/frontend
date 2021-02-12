import CeramicClient from '@ceramicnetwork/http-client';
import { ThreeIdConnect,  EthereumAuthProvider } from '3id-connect';
import { IDX } from '@ceramicstudio/idx';

const initCeramic = async (addr) => {

  /**** Ceramic Client ****/
  const CERAMIC_URL = "http://localhost:7007" // TODO :: change
  /* community dev :: https://ceramic-clay.3boxlabs.com :: R/W claynet, wiped often
    persistent storage :: https://yourEndpoint.com :: R/W claynet 
    localhost:7007 :: duh */
  const ceramic = new CeramicClient(CERAMIC_URL)
  /**end** Ceramic Client ****/
  
  /**** IDX ****/
  const aliases = require('../aliases.json')
  const idx = new IDX({ ceramic, aliases })
  /**end** IDX ****/
  
  /**** Set Ceramic Provider and return ****/
  return new Promise( async (resolve) => {
    const authProvider = new EthereumAuthProvider(window.ethereum, addr)
    console.log(authProvider)
    const threeIdConnect = new ThreeIdConnect()
    console.log(threeIdConnect)
    const conn = await threeIdConnect.connect(authProvider)
    console.log(conn)
    const provider = await threeIdConnect.getDidProvider()
    console.log(provider)
    const conf = await ceramic.setDIDProvider(provider)
    console.log(conf)
    resolve(ceramic, idx)
  });
}

export default initCeramic;