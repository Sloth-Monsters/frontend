import React, { Component, useState } from 'react';
import { web3, portis } from '../services/web3';

import globalContext from '../context'

class ShowPortis extends Component {
  
  callPortis = () => portis.showPortis();

  render() {
    return(
      <button 
        class="btn btn-primary btn-pill text-info mr-2 mb-2" 
        type="button" 
        onClick={this.callPortis}
      >
        see portis account
      </button>
    );
  }
}

class LoginPortis extends Component {
  
  portisLogin = () => {
    portis.provider.enable();
    
    portis.onLogin((walletAddress, email, reputation) => {
      this.context.toggleAuth();
      web3.eth.getBalance(walletAddress)
        .then( (balance) => {
          this.context.authenticated(walletAddress,balance);
        });
      console.log('Portis Login Successful!! Current context -');
      console.log(this.context)
    });

    portis.onError((err) => {
      console.log("This is an error -", err)
    })
  }

  render() {
    
    return(
      <button 
        class="btn btn-primary btn-pill text-info mr-2 mb-2" 
        type="button" 
        onClick={this.portisLogin}
      >
        login with portis
      </button>
    );
  }
}

LoginPortis.contextType = globalContext;

export { ShowPortis, LoginPortis };