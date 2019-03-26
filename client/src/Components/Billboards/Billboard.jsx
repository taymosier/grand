import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';

export class Billboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      "contents": this.props.contents,
      "name": this.formatNameForID(this.props.contents.name),
      "title": this.props.contents.title,
      "tagline": this.props.contents.tagline,
      "image": this.props.contents.image,
      "flavor_text": this.props.contents.flavor_text,
      "link": this.props.contents.link
    };
    this.formatNameForID = this.formatNameForID.bind(this);
  }

  componentDidMount(){
    this.setState({
      "contents": this.props.contents,
      "name": this.formatNameForID(this.props.contents.name),
      "title": this.props.contents.title,
      "tagline": this.props.contents.tagline,
      "image": this.props.contents.image,
      "flavor_text": this.props.contents.flavor_text,
      "link": this.props.contents.link
    });
  }

  componentDidUpdate(){
    if(this.state.contents !== this.props.contents){
      this.setState({
        "contents": this.props.contents,
        "name": this.formatNameForID(this.props.contents.name),
        "title": this.props.contents.title,
        "tagline": this.props.contents.tagline,
        "image": this.props.contents.image,
        "flavor_text": this.props.contents.flavor_text,
        "link": this.props.contents.link
      })
    }
  }

  formatNameForID(name){
    if(name !== undefined){
      name.replace(" ", "-");
      return name
    }
    return null;
  }

  splitText(text, className, delimiter){
    console.log(text)
    let textSplit = text.split(/_\/_/g);
    let textBlocks = [];
    if(textSplit.length > 1){
      for(let item in textSplit){
        textBlocks.push(<p className={`${className}`}>{textSplit[item]}</p>)
      }
      return textBlocks;
    }
    return text;
  }


  render(){
    let textBlocks = [];
    textBlocks = this.splitText(this.state.flavor_text[this.props.language], "billboard-flavor_text full-width", /_\/_/g);
    if((/_\/_/g).test(this.state.flavor_text)){
      console.log('hi there this is regex')
      console.log(this.state.flavor_text.search(/_\/_/g))
    }
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
              <div className="billboard-title">{this.state.title[this.props.language]}</div>
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
                <Button className="billboard-button" onClick={() => {this.props.setPage(this.state.link)}}>Learn More</Button>
             </Row>
           : null
          }
        </div>
    );
  }
}
