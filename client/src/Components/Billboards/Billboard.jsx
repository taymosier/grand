import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

import { capitalizeEveryWord, checkForSpecialClasses, splitText } from "../../helpers/dynamicCSS.js";
import { checkForEmptyAttributes } from "../../helpers/stateValidators.js";

export class Billboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      "contents": checkForEmptyAttributes(this.props.contents),
      "name": this.formatNameForID(this.props.contents.name),
      "title": checkForEmptyAttributes(this.props.contents.title),
      "class": checkForSpecialClasses(this.props.contents),
      "tagline": checkForEmptyAttributes(this.props.contents.tagline),
      "image": checkForEmptyAttributes(this.props.contents.image),
      "flavor_text": checkForEmptyAttributes(this.props.contents.flavor_text),
      "link": checkForEmptyAttributes(this.props.contents.link),
      "btnTxt": {
        "en": "Learn More",
        "es": "Aprende Más"
      }
    };
    this.formatNameForID = this.formatNameForID.bind(this);
  }

  componentDidMount(){
    this.setState({
      "contents": checkForEmptyAttributes(this.props.contents),
      "name": this.formatNameForID(this.props.contents.name),
      "title": checkForEmptyAttributes(this.props.contents.title),
      "class": checkForSpecialClasses(this.props.contents),
      "tagline": checkForEmptyAttributes(this.props.contents.tagline),
      "image": checkForEmptyAttributes(this.props.contents.image),
      "flavor_text": checkForEmptyAttributes(this.props.contents.flavor_text),
      "link": checkForEmptyAttributes(this.props.contents.link),
      "btnTxt": {
        "en": "Learn More",
        "es": "Aprende Más"
      }
    });
  }

  componentDidUpdate(){
    if(this.state.contents !== this.props.contents){
      this.setState({
        "contents": checkForEmptyAttributes(this.props.contents),
        "name": this.formatNameForID(this.props.contents.name),
        "title": checkForEmptyAttributes(this.props.contents.title),
        "class": checkForSpecialClasses(this.props.contents),
        "tagline": checkForEmptyAttributes(this.props.contents.tagline),
        "image": checkForEmptyAttributes(this.props.contents.image),
        "flavor_text": checkForEmptyAttributes(this.props.contents.flavor_text),
        "link": checkForEmptyAttributes(this.props.contents.link)
      })
    }
  }

  formatNameForID(name){
    if(name !== undefined){
      name.replace(" ", "-");
      return name;
    }
    return null;
  }

  render(){
    let textBlocks = [];
    textBlocks = splitText(this.state.flavor_text[this.props.language], `billboard-flavor_text ${this.state.class}`, /_\/_/g);
    return(
        <div className="billboard no-image" id={this.state.name}>
          <Row className="billboard-top-row">
            <Col
              xl={{ size: 10, offset: 1 }}
              lg={{ size: 10, offset: 1 }}
              md={{ size: 10, offset: 1 }}
              sm={{ size: 10, offset: 1 }}
              xs={{ size: 10, offset: 1 }}
              className="billboard-text-container"
            >
              {this.state.title[this.props.language] !== "" && this.state.title[this.props.language] !== undefined
                ? <div className={`billboard-title ${this.state.class}`}>{capitalizeEveryWord(this.state.title[this.props.language])}</div>
                : null
              }
              {this.state.tagline
                ? <div className="billboard-tagline">
                    {this.state.tagline[this.props.language]}
                  </div>
                : null
              }
              <div className="billboard-flavor_text-container ">
                {textBlocks}
              </div>
            </Col>
          </Row>
          {this.state.link !== "" && this.state.link !== undefined
           ? <Row className="billboard-bottom-row">
                <Button className="billboard-button" onClick={() => {this.props.setPage(this.state.link)}}>{this.state.btnTxt[this.props.language]}</Button>
             </Row>
           : null
          }
        </div>
    );
  }
}
