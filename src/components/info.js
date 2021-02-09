import React, { useContext } from 'react';

import globalContext from '../context';

const UserInfo = () => {
  
  return(
    <globalContext.Consumer>
      {
        ({ address, balance }) => (
          <>
            <span>Address :: {address}</span>
            &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;
            <span>Balance :: {balance} ETH</span>
          </>
        )
      }
    </globalContext.Consumer>
  );
}

export { UserInfo };