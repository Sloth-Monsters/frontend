import React, { Component, useState, useContext, useEffect } from 'react';
import { UserInfo } from '../components/info';
import { ShowPortis } from '../components/portis';
import { CreateDoc, QueryDoc } from '../components/ceramic';

import { globalContext } from '../context'

import initCeramic from '../services/ceramic'
import { sf } from '../services/web3';
import { findByPlaceholderText } from '@testing-library/react';
import { useHistory } from 'react-router-dom';

const aliases = require('../aliases.json')

const Dashboard = () => {
  
  const context = useContext(globalContext)
  const history = useHistory()
  if(!context.isAuth) { history.push('/') }
  
  const [isResult, setisResult] = useState(false);

  
  useEffect(() => {    
    if(context.isAuth) {
      initCeramic(context.address).then( (result) => {
        console.log(result) // TODO :: get did
        context.setCeramic(result)
        setisResult(true)
      })
    }
    // TODO :: init only if subscribed
    // sf.initialize() 
    context.update('superf', sf)
    console.log(context)
  }, []) // componentDidMount

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
        <div>
          <CreateDoc />
        </div>
        <div>
          <QueryDoc />
        </div>
      </>
  );

};

export default Dashboard;