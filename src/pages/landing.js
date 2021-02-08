import React, { Component } from 'react';
// import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../components/home';
import Header from '../components/header';
import Footer from '../components/footer';

class Landing extends Component {

  setAddress = (addr) => {
    this.setState({
      address: addr
    })
  }
  
  setBalance = (bal) => {
    this.setState({
      balance: bal
    });
  }

  state = {
    isAuth: this.props.authenticated,
    address: null,
    balance: null,
    setAddress: this.setAddress,
    setBalance: this.setBalance
  }

  render() {
    return (
      <div>
        <Header />
        <Home super={this.state} />
        <Footer super={this.state} />
      </div>
    );
  }
}
export default Landing;