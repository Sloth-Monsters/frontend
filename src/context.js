import React from 'react';

let globul = {

  /* autthentication */

  isAuth: null,
  address: null,
  balance: null,
  sign_addr: null,

  /* connections */

  ceramic: null,
  idx: null,
  portis: null,
  web3: null,
  superf: null,

  /* user */

  name: null,
  email: null,
  three_id: null,
  sign: null,

  /* promises */

  setPortis: () => {},
  authenticated: () => {},
  setCeramic: () => {},
  update: () => {},
  reset: () => {}
}

export const globalContext = React.createContext(globul);


/* TODO :: if ever

let auth = {
  isAuth: null,
  address: null,
  balance: null,
  sign_addr: null
}


let conn = {
  ceramic: null,
  idx: null,
  portis: null,
  web3: null,
  super: null
}

let user = {
  name: null,
  email: null,
  three_id: null,
  sign: null
}

export const authContext = React.createContext(auth);
export const connContext = React.createContext(conn);
export const userContext = React.createContext(user);


*/