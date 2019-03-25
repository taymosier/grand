import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

import MapsContainer from '../Map/MapsContainer.jsx';

export class BillboardWithMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      mapConfig: this.props.mapConfig
    }
  }

  componentDidUpdate(){
    if(this.state.mapConfig !== this.props.mapConfig){
      this.setState({
        mapConfig: this.props.mapConfig
      })
    }
  }
  render(){
    return(
      <div className="billboard-map">
          <Col
            className="billboard-map-left-col"
            xl={{ size: 9, offset: 0 }}
            lg={{ size: 9, offset: 0 }}
            md={{ size: 0, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
          >
            <Row className="map-container-row">
              <MapsContainer className="mapContainer" mapConfig={this.state.mapConfig}/>
            </Row>
            <Row className="billboard-map-address-row">
              <p>info</p>
            </Row>
          </Col>
          <Col
            className="billboard-map-right-col"
            xl={{ size: 3, offset: 0 }}
            lg={{ size: 3, offset: 0 }}
            md={{ size: 0, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
          >
            <div className="map-info-container">
              hey
            </div>
          </Col >
      </div>
    )
  }
}
