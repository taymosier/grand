import React, { Component } from 'react';

import MapsContainer from '../Map/MapsContainer.jsx';

export class BillboardWithMap extends Component {

  render(){
    return(
      <div className="billboard-map">
        <MapsContainer className="mapContainer" />
      </div>
    )
  }
}
