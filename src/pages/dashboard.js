import React, { Component } from 'react';
import { UserInfo } from '../components/info';
import { ShowPortis } from '../components/portis';

import { globalContext } from '../context'

import initCeramic from '../services/ceramic'
import { sf } from '../services/web3';

class Dashboard extends Component {
  
  componentDidMount() {    
    if(this.context.isAuth) {
      initCeramic(this.context.address).then( (result) => {
        console.log(result) // TODO :: get did
        this.context.ceramic(result)
      })
    }
    // TODO :: init only if subscribed
    // sf.initialize() 
    this.context.update('superf', sf)
    console.log(this.context)
  }


  render() {
    
    if(!this.context.isAuth) { this.props.history.push('/') }
    
    return(
      <>
      <div>
        much summary
      </div>
      <div>
        <UserInfo />
      </div>
      <div>
        <ShowPortis />
      </div>
      </>
    );
  }

}; Dashboard.contextType = globalContext;

export default Dashboard;