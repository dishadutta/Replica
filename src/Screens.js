import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';
import chat from './images/chat.PNG';
import stickers from './images/stickers.PNG';
import call from './images/call.PNG';
import sticker2 from './images/sticker2.PNG';

class Screens extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 setup" style={{marginTop: "110px"}}>
          <h1>Awesome app for business to grow</h1>
          <p className="setup-p">A great and handy tool for maximizing productivity and utilizing resources
            to the max is your smartphone. Mobile apps can help break down and simplify many of the day-to-day
            tasks a business must accomplish.
          </p>
          <Button className="download">LEARN MORE</Button>
        </div>

        <div className="col-8">
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{border:"transparent", textAlign: "center"}}>
              <div class="card-body">
                <img src={stickers} />
                <h4 className="setup-p">Awesome Stickers</h4>
                <p>A sticker is a label or a decoration with a sticky back, so it can be pasted anywhere</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{border:"transparent", textAlign: "center"}}>
              <div class="card-body">
                <img src={chat} />
                <h4 className="setup-p">Video Chat</h4>
                <p>It is a face-to-face conversation held over the Internet by means of webcams and dedicated software</p>
              </div>
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="card" style={{border:"transparent", textAlign: "center"}}>
                <div class="card-body">
                <img src={call} />
                <h4 className="setup-p">Conference Call</h4>
                <p>The conference call may be designed to allow the called party to participate during the call or set up</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card" style={{border:"transparent", textAlign: "center"}}>
                <div class="card-body">
                  <img src={sticker2} />
                  <h4 className="setup-p">Awesome Stickers</h4>
                  <p>If you're a big fan of superheroes, you might cover your notebooks with Wonder Woman stickers</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Screens;
