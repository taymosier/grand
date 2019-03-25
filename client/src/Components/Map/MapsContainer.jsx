import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from './Map.jsx'
import { GoogleApiWrapper } from 'google-maps-react';

//Grand

export class MapsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      google: this.props.google
    }
  }

  componentDidUpdate(){
    if(this.state.google !== this.props.google){
      this.setState({
        google: this.props.google
      })
    }
  }
  render(){
    console.log(GoogleApiWrapper)
    return(
      <div className="mapsContainer">
        <div className="wrapper">
            <Map google={this.props.google}/>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBWhgQaAgjS-v4bSzPIADVTvGEbrQhsQ0c')
}) (MapsContainer)
