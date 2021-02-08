import React, { Component } from 'react';
// import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../components/home';
import Header from '../components/header';
import Footer from '../components/footer';

class Landing extends Component {

  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
export default Landing;