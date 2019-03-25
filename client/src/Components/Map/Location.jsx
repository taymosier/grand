import React, { Component } from 'react';
import MapsContainer from './MapsContainer.jsx';
import '../../styles/location.css';


export class Location extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="locationView">
        <h3>Location & Hours</h3>
          <div className="leftColumn">
            <div className="hoursContainer">
              <h4>Hours</h4>
              <h3>Monday-Friday:</h3>
              <p>7:00am - 430pm</p>
              <h3>Saturday</h3>
              <p>8:00am - 1pm</p>
              <h3>Sunday</h3>
              <p>Closed</p>
          </div>
          <div className="phoneContainer">
            <h4>Phone</h4>
            <p>252-758-7775</p>
            <br />
            <h4>Fax</h4>
            <p>252-758-7772</p>
            <br />
          </div>
          <div className="addressContainer">
              <h4>Address</h4>
              <p>2025 A Eastgate Dr</p>
              <p>Greenville, NC 27858</p>
          </div>
          </div>

          <div className="rightColumn">
            <MapsContainer className="mapContainer" />
          </div>
        </div>
        );
      }
}
