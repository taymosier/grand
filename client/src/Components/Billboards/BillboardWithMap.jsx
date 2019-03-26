import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { TabbedInfoPane } from '../TabbedInfoPane';

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
      <Row className="billboard-map">
          <Col
            className="left-col"
            xl={{ size: 9, offset: 0 }}
            lg={{ size: 9, offset: 0 }}
            md={{ size: 0, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
          >
            <Row className="map-container-row">
              <MapsContainer className="mapContainer" mapConfig={this.state.mapConfig}/>
            </Row>
            <Row className="address-row">
              <h5>Vidanta Nuevo Vallarta</h5>
                <span />
              <p>Boulevard Riviera Nayarit #254 Bahia de Banderas, Nayarit CP 63735</p>
            </Row>
          </Col>

          <Col
            className="right-col"
            xl={{ size: 3, offset: 0 }}
            lg={{ size: 3, offset: 0 }}
            md={{ size: 0, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
          >
            <Row className="info-container">
              <h4 className="info-header">
                Quick References
              </h4>
              <TabbedInfoPane />
            </Row>
          </Col >
      </Row>
    )
  }
}
