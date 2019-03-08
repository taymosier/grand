import React, { Component } from 'react';
import { Col } from 'reactstrap';

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
      "button_link": this.props.contents.action_link
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
      "button_link": this.props.contents.action_link
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
        "button_link": this.props.contents.action_link
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


  render(){
    return(
        <div className="billboard" id={this.state.name}>
          <Col
            xl={{ size: 6, offset: 0 }}
            lg={{ size: 5, offset: 0 }}
            md={{ size: 12, offset: 0 }}
            className="billboard-image-container"
          >
            { this.state.image
              ? <img className="billboard-image" src={require("../../public/images/billboards/"+this.state.image)} alt={this.state.image}/>
              : null
            }
          </Col>
          <Col
            xl={{ size: 4, offset: 7 }}
            lg={{ size: 5, offset: 6 }}
            md={{ size: 10, offset: 1 }}
            className="billboard-text-container"
          >
            <div className="billboard-title">{this.state.title}</div>
            {this.state.tagline
              ? <svg viewBox="0 0 195 25" className="billboard-tagline">
                  <text x="0" y="20">{this.state.tagline}</text>
                </svg>
              : null
            }
            <div className="billboard-flavor_text-container">
              <p className="billboard-flavor_text">{this.state.flavor_text}</p>
            </div>
          </Col>
        </div>
    );
  }
}
