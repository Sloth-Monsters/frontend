import React, { Component, useState } from 'react';
import { Div, StyleReset, ThemeProvider, Button } from "atomize";

import { ShowPortis, LoginPortis } from './portis';
import List from './list';
// import { render } from '@testing-library/react';

class Home extends Component {

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