import React, { Component } from 'react';
import Header from './header.js';
import Dashbody from './dashbody.js';
import './dashboard.css';
import { Router, Routes,Route } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div classname="background">
          <Header />
          <Dashbody />
        
      </div>
      
    );
  }
}


export default Dashboard;
