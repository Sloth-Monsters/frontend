import React, { Component, useState } from 'react';
import { Div, StyleReset, ThemeProvider, Button } from "atomize";

import { ShowPortis, LoginPortis } from './portis';
import List from './list';
// import { render } from '@testing-library/react';
import globalStateContext from '../context'

class Home extends Component {

  static contextType = globalStateContext;

  render() {

    return (
      
      <>
        {this.props.authenticated ? (
          <></>
        ) : (
            <ShowPortis />

          )}
        <List />
      </>

    );
  }

}


export default Home;