import React, { Component } from 'react';
import Header from './header.js';
import Dashbody from './dashbody.js';
import './dashboard.css';

class Dashboard extends Component {
  render() {

    return (
      <div className='background'>
        <div>
          <Header />
        </div>
        <div>
          <Dashbody />
        </div>
      </div>
    );
  }
}


export default Dashboard;
