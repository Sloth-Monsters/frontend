import React, { Component } from 'react';
import { UserInfo } from '../components/info';
import { ShowPortis } from '../components/portis';


class Dashboard extends Component {


  render() {

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

}

export default Dashboard;