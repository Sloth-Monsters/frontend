import React, { Component } from 'react';

import { LoginPortis } from '../components/portis';
import { UserInfo } from '../components/info'

import globalContext from '../context'

import initCeramic from '../services/ceramic'
import { sf } from '../services/web3';

class Landing extends Component {

  render() {
    if(this.context.isAuth) { this.props.history.push('/dash') }

    // console.log(this)
    return (
      <>
        <div className="row justify-content-center">
          <p>
            Welcome to our dApp
          </p>
        </div>
        <div className="row justify-content-center">
          <LoginPortis />
          <button 
            className="btn btn-primary btn-pill text-info mr-2 mb-2" 
            type="button" 
            onClick={() => { this.props.history.push('/browse') }}
          >
            just browse
          </button>
        </div>
        <div className="row justify-content-center">
          <UserInfo />
        </div>
      </>
    );
  }
}

Landing.contextType = globalContext;

export default Landing;