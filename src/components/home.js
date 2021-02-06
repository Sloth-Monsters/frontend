import React, { Component, useState } from 'react';
import { Div, StyleReset, ThemeProvider, Button } from "atomize";

import { web3, portis } from '../services/web3';


const Home = () => {
  const [ address, setAddress ] = useState("");
  const [ balance, setBalance ] = useState(0)

  portis.onLogin((address)=> {
    console.log(address);

    web3.eth.getBalance(address).then((balance) => {
      setBalance(Number(web3.utils.fromWei(balance)))
      setAddress(address)
    })
  });

  web3.eth.getAccounts((accounts) => {
    console.log(accounts);
  })

  return (
    <main>
      <div class="section-header pb-6 bg-primary overflow-hidden text-center border-bottom border-light">
        <div class="container z-2">
        </div>
        <div class="row justify-content-center">

          Address={address}, Balance={balance}
        </div>
      </div>
    </main>
  );
}

export default Home;