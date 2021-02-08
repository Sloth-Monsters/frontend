import React, { Component, useState } from 'react';
import { web3, portis } from '../services/web3';

import globalStateContext from '../context'

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
  
  static contextType = globalStateContext;
  
  portisLogin = () => {
    portis.provider.enable();
    
    portis.onLogin((walletAddress, email, reputation) => {
      // this.props.super.isAuth = true
      // this.props.super.setAddress(walletAddress);
      // this.props.super.setAddress(walletAddress);
      // web3.eth.getBalance(walletAddress).then( (balance) => {
      //   this.props.super.setBalance(Number(web3.utils.fromWei(balance)))
      // });
      this.context.isAuth = true;
      this.context.address = walletAddress;
      this.context.email = email;
      web3.eth.getBalance(walletAddress).then( (balance) => {
        this.context.balance = Number(web3.utils.fromWei(balance))
      });
      console.log('Logged in - ' + walletAddress, email, reputation)
    });
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

export { ShowPortis, LoginPortis };