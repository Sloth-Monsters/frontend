import React, { Component } from 'react';

import { LoginPortis } from '../components/portis';
import { UserInfo } from '../components/info'

import globalContext from '../context'

import initCeramic from '../services/ceramic'
import { sf } from '../services/web3';
import { Button } from 'ui-neumorphism'

import CardView from '../components/cardview';
import ProfileView from '../components/profileview';

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
          <Button 
            dark 
            rounded 
            type="button" 
            onClick={() => { this.props.history.push('/browse') }}
            >
              Just Browse
            </Button>
        </div>
        <div className="row justify-content-center">
          <UserInfo />
        </div>
        <div>
          <CardView />
        </div>
        <div>
          <ProfileView />
        </div>
      </>
    );
  }
}

Landing.contextType = globalContext;

export default Landing;