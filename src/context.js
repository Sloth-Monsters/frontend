import React from 'react';

let globul = {
  
  /* Portis Login Context */
  
  isAuth: null,
  address: null,
  balance: null,
  
  toggleAuth: () => {},
  authenticated: () => {},

  /* Cermaic Context */

  email: null

}

const globalContext = React.createContext(globul);

export default globalContext;