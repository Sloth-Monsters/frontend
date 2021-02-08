import React, { Component, useState } from 'react';
import { Div, StyleReset, ThemeProvider, Button } from "atomize";

import { web3, portis } from '../services/web3';


const Home = (props) => {
  // const [ address, setAddress ] = useState("");
  // const [ balance, setBalance ] = useState(0)

  // TODO :: this one was not running
  // portis.onLogin((address)=> {
  //   console.log(address);

  //   web3.eth.getBalance(address).then((balance) => {
  //     setBalance(Number(web3.utils.fromWei(balance)))
  //     setAddress(address)
  //   })
  // });

  var msg = 'No user logged in'

  portis.onLogin((walletAddress, email, reputation) => {
    props.super.isAuth = true
    props.super.setAddress(walletAddress);
    web3.eth.getBalance(walletAddress).then( (balance) => {
      props.super.setBalance(Number(web3.utils.fromWei(balance)))
    });
    // doesnt update DOM
    msg = 'user logged in with ETH addr ' + walletAddress
    console.log('Logged in - ' + walletAddress, email, reputation)
  });

  const portisLogin = () => portis.provider.enable();

  return (
    <main>
      <div class="section-header pb-6 bg-primary overflow-hidden text-center border-bottom border-light">
        <div class="container z-2">
          {msg} 
        </div>
        <div class="row justify-content-center">
          <button class="btn btn-primary btn-pill text-info mr-2 mb-2" type="button" onClick={portisLogin}>login with portis</button>
        </div>
      </div>
    </main>
  );

  
}

export default Home;