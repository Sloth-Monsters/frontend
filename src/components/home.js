import React, { Component, useState } from 'react';
import { Div, StyleReset, ThemeProvider, Button } from "atomize";

import { ShowPortis, LoginPortis } from './portis';
// import { render } from '@testing-library/react';

class Home extends Component {

  render() {

    return (
      <main>
        <div class="section-header pb-6 bg-primary overflow-hidden text-center border-bottom border-light">
          <div class="container z-2">
            {/* {msg} */}
          </div>
          <div class="row justify-content-center">
            <LoginPortis super={this.props.super}/>
            <ShowPortis />
          </div>
        </div>
      </main>
    );  
  }

}


export default Home;