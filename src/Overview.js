import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';
import great from './images/great.jpg';

class Overview extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-6">
        <img src={great} className="home-img" />
      </div>
        <div className="col-6 setup">
          <h3 style={{color:"#F07418"}}>What makes us Great!</h3>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h1>
          <p className="setup-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
          </p>
          <Button className="play">LEARN MORE</Button>
        </div>
      </div>
    );
  }
}

export default Overview;
