import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';
import home from './images/home.png';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6 setup">
          <h1>Setup your Mijuapp account in no-time!</h1>
          <p className="setup-p">Mijuapp is the perfect app showcase psd template designed based on Bootstrap 1170px grid system 12 columns.
             It can be used to showcase app, its features, pricing and much more. You can customize it easily
          </p>
          <Button className="download">DOWNLOAD <i class="fas fa-download"></i></Button>
          <Button className="play">PLAY VIDEO <i class="fas fa-play"></i></Button>
        </div>
        <div className="col-6">
          <img src={home} className="home-img" />
        </div>
      </div>
    );
  }
}

export default Home;
