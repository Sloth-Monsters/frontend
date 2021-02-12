import React, { Component } from 'react';
import { UserInfo } from '../components/info';
import { ShowPortis } from '../components/portis';

import globalContext from '../context'

import initCeramic from '../services/ceramic'
import { sf } from '../services/web3';

class Dashboard extends Component {
  
  componentDidMount() {    
    if(this.context.isAuth) {
      initCeramic(this.context.address).then( (ceramic, idx) => {
        console.log(ceramic)
        console.log(idx)
        this.setState({
          ceramic: ceramic,
          idx: idx
        }) // TODO move to connectionContext
      })
    }
    sf.initialize() // TODO :: init only if subscribed
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