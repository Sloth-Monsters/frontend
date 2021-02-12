import logo from './logo.svg';
import { StyleReset } from 'atomize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';

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

import globalContext from './context'

class App extends Component {

  constructor(props) {
    super(props);

    this.authenticated = (a,b) => {
      this.setState( state => ({    
        isAuth: !state.isAuth,
        address: a,
        balance: b
      })
    )}

    this.state = { // See './context.js#globul'
      isAuth: false,
      address: '',
      balance: 0,
      authenticated: this.authenticated,
      email: ''
    }
  }

  
  render() {
    
    return (
      <globalContext.Provider value={this.state}>
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
      </globalContext.Provider>
    );
  }
}

export default App;
