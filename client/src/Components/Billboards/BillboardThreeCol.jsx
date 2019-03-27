import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

import { splitText } from '../../helpers/dynamicCSS.js'


export class BillboardThreeCol extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.formatNameForID = this.formatNameForID.bind(this);
  }

  componentDidMount(){
    this.setState({

    });
  }

  componentDidUpdate(){
    if(this.state.contents !== this.props.contents){
      return null
    }
  }

  formatNameForID(name){
    if(name !== undefined){
      name.replace(" ", "-");
      return name
    }
    return null;
  }

  render(){
    let textBlocks = [];
    textBlocks = splitText(this.state.flavor_text[this.props.language], "billboard-flavor_text-three-col", /_\/_/g);
    return(
        <div className="billboard billboard-three-col" id={this.state.name}>
          <Row className="billboard-top-row">
            <Col
              xl={{ size: 10, offset: 1 }}
              lg={{ size: 10, offset: 1 }}
              md={{ size: 10, offset: 1 }}
              sm={{ size: 10, offset: 1 }}
              xs={{ size: 10, offset: 1 }}
              className="billboard-text-container"
            >
              <div className="billboard-title">{this.state.title[this.props.language]}</div>
              {this.state.tagline[this.props.language] !== undefined
                ? <div className="billboard-tagline">
                    {this.state.tagline[this.props.language]}
                  </div>
                : null
              }
            </Col>
          </Row>
          <Row className="billboard-bottom-row">
              <Col
                xl={{ size: 4, offset: 0 }}
                lg={{ size: 4, offset: 0 }}
                md={{ size: 4, offset: 0 }}
                sm={{ size: 4, offset: 0 }}
                xs={{ size: 4, offset: 0 }}
              >
              { textBlocks.length
                 ? textBlocks[0]
                 : null
               }
              </Col>
              <Col
                xl={{ size: 4, offset: 0 }}
                lg={{ size: 4, offset: 0 }}
                md={{ size: 4, offset: 0 }}
                sm={{ size: 4, offset: 0 }}
                xs={{ size: 4, offset: 0 }}
              >
                {textBlocks[1]}
              </Col>
              <Col
                xl={{ size: 4, offset: 0 }}
                lg={{ size: 4, offset: 0 }}
                md={{ size: 4, offset: 0 }}
                sm={{ size: 4, offset: 0 }}
                xs={{ size: 4, offset: 0 }}
              >
                {textBlocks[2]}
              </Col>
           </Row>
        </div>
    );
  }
}
