import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';
import home from './images/home.png';

class Contacts extends Component {
  render() {
    return (
      <div class="card-group">
        <div class="card" style={{borderRadius:"25px", background:"#EEDCDC"}}>
          <div class="card-body" style={{textAlign: "center"}}>
            <h5 class="card-title">381K</h5>
            <p class="card-text" style={{color:"#F07418"}}>__</p>
            <p class="card-text"><small class="text-muted">Active Downloads</small></p>
          </div>
        </div>
        <div class="card" style={{borderRadius:"25px", marginRight:"10px", marginLeft:"10px", background:"#EEDCDC"}}>
          <div class="card-body" style={{textAlign: "center"}}>
            <h5 class="card-title">26.9K</h5>
            <p class="card-text" style={{color:"#F07418"}}>__</p>
            <p class="card-text"><small class="text-muted">Facfebook Likes</small></p>
          </div>
        </div>
        <div class="card" style={{borderRadius:"25px", marginRight:"10px", background:"#EEDCDC"}}>
          <div class="card-body" style={{textAlign: "center"}}>
            <h5 class="card-title">7.50K</h5>
            <p class="card-text" style={{color:"#F07418"}}>__</p>
            <p class="card-text"><small class="text-muted">Satisfies Customers</small></p>
          </div>
        </div>
        <div class="card" style={{borderRadius:"25px", background:"#EEDCDC"}}>
          <div class="card-body" style={{textAlign: "center"}}>
            <h5 class="card-title">150K</h5>
            <p class="card-text" style={{color:"#F07418"}}>__</p>
            <p class="card-text"><small class="text-muted">Instagram Followerd</small></p>
          </div>
        </div>
</div>
    );
  }
}

export default Contacts;
