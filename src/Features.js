import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';
import chat from './images/chat.PNG';
import stickers from './images/stickers.PNG';
import call from './images/call.PNG';

class Features extends Component {
  render() {
    return (
      <>
      <h2 style={{textAlign: "center"}}>Features loves by our users</h2>
      <div className="gap"></div>
      <div className="row">
        <div className="col-4" style={{textAlign: "center"}}>
        <img src={stickers} />
        <h4 className="setup-p">Awesome Stickers</h4>
        <p>A sticker is a label or a decoration with a sticky back, so it can be pasted anywhere.
           If you're a big fan of superheroes, you might cover your notebooks with Wonder Woman stickers
        </p>
        </div>
        <div className="col-4" style={{textAlign: "center"}}>
        <img src={chat} />
        <h4 className="setup-p">Video Chat</h4>
        <p>It is a face-to-face conversation held over the Internet by means of webcams and dedicated software.
           Communicating visually with another person via computer. Video chat may refer to video calling or
           video messaging.
        </p>
        </div>
        <div className="col-4" style={{textAlign: "center"}}>
        <img src={call} />
        <h4 className="setup-p">Conference Call</h4>
        <p>The conference call may be designed to allow the called party to participate during the call or set up so
           that the called party merely listens into the call and cannot speak.
        </p>
        </div>
      </div>
      <div  style={{textAlign: "center"}} className="setup-p">
        <Button variant="outline-light" className="mr-sm-2 head-button">BROWSE ALL FEATURES</Button>
      </div>
      </>
    );
  }
}

export default Features;
