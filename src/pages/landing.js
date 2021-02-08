import React, { Component, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ShowPortis, LoginPortis } from '../components/portis';

import globalStateContext from '../context'

class Landing extends Component {

  static history = useHistory();
  static context = useContext();

  no_login = () => {
    // e.preventDefault();
    history.pushState('/browse')
  }

  render() {
    if(context.isAuth) { this.no_login(); }

    return (
      <div class="row justify-content-center">
        <p>
          Welcome to our App
        </p>
        <LoginPortis />
        <button 
          class="btn btn-primary btn-pill text-info mr-2 mb-2" 
          type="button" 
          onClick={this.no_login}
        >
          just browse
        </button>
      </div>
    );
  }
}
export default Landing;