import React from 'react';

let globul = {
  
  /* Authentication Context */
  
  isAuth: null,
  address: null,
  balance: null,  
  authenticated: () => {},

  /* Cermaic Context */

  email: null

}

let connects = {
  ceramic: null,
  idx: null,
  portis: null
}


const globalContext = React.createContext(globul);

export default globalContext;