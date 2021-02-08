import React, { Component, useState } from 'react';
import { web3, portis } from '../services/web3';

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
      this.props.super.isAuth = true
      this.props.super.setAddress(walletAddress);
      web3.eth.getBalance(walletAddress).then( (balance) => {
        this.props.super.setBalance(Number(web3.utils.fromWei(balance)))
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