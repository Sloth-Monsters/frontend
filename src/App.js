import logo from './logo.svg';
import { ThemeProvider, StyleReset } from 'atomize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, useState } from 'react';


import globalStateContext from './context'
import Landing from './pages/landing';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Browse from './pages/browse';
import Review from './pages/reviews';
import Profile from './pages/profile';
import Wallet from './pages/wallet';
import TasteProfile from './pages/trails';

import './index.css';
import './App.css';

const globalState = {
  isAuth: false,
  email: null,
  address: null,
  balance: null
};

class App extends Component {

  render() {
    
    return (
      <globalStateContext.Provider value={globalState}>
        <StyleReset />
        <Router>
          <Route exact path="/" component={Landing} />
    
          <Route exact path="/join" component={Register} />
          <Route exact path="/dash" component={Dashboard} />
          
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/review/:obj" component={Review} />
          
          <Route exact path="/me" component={Profile} />
          <Route exact path="/monies" component={Wallet} />
          <Route exact path="/trails" component={TasteProfile} />
        </Router>
      </globalStateContext.Provider>
    );
  }
}

export default App;
