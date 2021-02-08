import React, { Component, useState } from 'react';
import { Div, StyleReset, ThemeProvider, Button } from "atomize";

import { ShowPortis, LoginPortis } from './portis';
// import { render } from '@testing-library/react';
import globalStateContext from '../context'

class Home extends Component {

  static contextType = globalStateContext;

  render() {

    return (
      <main>
        <div class="section-header pb-6 bg-primary overflow-hidden text-center border-bottom border-light">
          <div class="container z-2">
            {/* {msg} */}
          </div>
          <div class="row justify-content-center">
            <LoginPortis />
            <ShowPortis />
            <div>
              {this.context.address}
            </div>
          </div>
        </div>
      </main>
    );  
  }

}


export default Home;