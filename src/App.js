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

import { overrideThemeVariables } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

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

  componentDidMount() {
    // takes an object of css variable key-value pairs
    overrideThemeVariables({
      '--light-bg': '#292E35',
      '--light-bg-dark-shadow': '#93a5be',
      '--light-bg-light-shadow': '#D1D9E6',
      '--dark-bg': '#292E35',
      '--dark-bg-dark-shadow': '#21252a',
      '--dark-bg-light-shadow': '#313740',
      '--primary': '#8672FB',
      '--primary-dark': '#4526f9',
      '--primary-light': '#c7befd'
    })
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
