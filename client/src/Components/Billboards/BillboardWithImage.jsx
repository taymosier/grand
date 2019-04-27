import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

import { BillboardImage } from "./BillboardImage";

import { capitalizeEveryWord, checkForSpecialClasses, splitText } from "../../helpers/dynamicCSS.js";
import { checkForEmptyAttributes } from "../../helpers/stateValidators.js";

export class BillboardWithImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      "contents": this.props.contents,
      "name": this.formatNameForID(this.props.contents.name),
      "class": checkForSpecialClasses(this.props.contents),
      "title": checkForEmptyAttributes(this.props.contents.title),
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
    this.handleImageProp = this.handleImageProp.bind(this);
  }

  componentDidMount(){
    this.setState({
      "contents": this.props.contents,
      "name": this.formatNameForID(this.props.contents.name),
      "class": checkForSpecialClasses(this.props.contents),
      "title": checkForEmptyAttributes(this.props.contents.title),
      "tagline": checkForEmptyAttributes(this.props.contents.tagline),
      "image": checkForEmptyAttributes(this.props.contents.image),
      "flavor_text": checkForEmptyAttributes(this.props.contents.flavor_text),
      "link": checkForEmptyAttributes(this.props.contents.link)
    });
  }

  componentDidUpdate(){
    if(this.state.contents !== this.props.contents){
      this.setState({
        "contents": this.props.contents,
        "name": this.formatNameForID(this.props.contents.name),
        "class": checkForSpecialClasses(this.props.contents),
        "title": checkForEmptyAttributes(this.props.contents.title),
        "tagline": checkForEmptyAttributes(this.props.contents.tagline),
        "image": checkForEmptyAttributes(this.props.contents.image),
        "flavor_text": checkForEmptyAttributes(this.props.contents.flavor_text),
        "link": checkForEmptyAttributes(this.props.contents.link)
      })
    }
    if(this.props.contents === null){
      this.setState({
        contents: null
      })
    }
  }

  handleImageProp(imageProp){
    let processedImageProp = null;
    processedImageProp = this.setImageState(imageProp);
    if(processedImageProp !== null){
      processedImageProp = this.setImageProp(processedImageProp);
    }
    return processedImageProp;
  }

  setImageState(imageProp){
    let imageArray = [];
    let multipleImages = false;
    try{
      if(imageProp.length > 1){
        multipleImages = true;
      }
    } catch(e){
      console.log(e)
    }
    if(multipleImages){
      for(let item in imageProp){
        imageArray.push(imageProp[item]);
      }
    } else {
      imageArray.push(imageProp)
    }
    return imageArray;
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
    textBlocks = splitText(this.state.flavor_text[this.props.language], this.state.class, /_\/_/g);

    return(
        <div className={`billboard ${this.state.class}`} id={this.state.name}>
          <Row className="billboard-row">
            <Col
              xl={{ size: 5, offset: 0 }}
              lg={{ size: 6, offset: 0 }}
              md={{ size: 12, offset: 0 }}
              className="billboard-image-container"
            >
              { this.state.image !== undefined
                ? <BillboardImage
                    className={`billboard-image ${this.state.class}`}
                    image={this.state.image}
                    alt={this.state.image}
                  />
                : null
              }
            </Col>
            <Col
              xl={{ size: 6, offset: 0 }}
              lg={{ size: 6, offset: 0 }}
              md={{ size: 10, offset: 1 }}
              className="billboard-text-container"
            >
              {this.state.title[this.props.language] !== "" && this.state.title[this.props.language] !== undefined
              ? <div className={`billboard-title ${this.state.class}`}>
                  {capitalizeEveryWord(this.state.title[this.props.language])}
                </div>
              : <div className={`billboard-title`}/>
              }
              {this.state.tagline
                ? <div className="billboard-tagline">
                    {this.state.tagline[this.props.language]}
                  </div>
                : null
              }
              <div className="billboard-flavor_text-container">
                {textBlocks}
              </div>
              {this.state.link !== "" && this.state.link !== undefined
                ? <Button className="billboard-button" onClick={() => {this.props.setPage(this.state.link)}}>{this.state.btnTxt[this.props.language]}</Button>
                : null
              }
            </Col>
          </Row>
        </div>
    );
  }
}
