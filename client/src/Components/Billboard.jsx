import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';

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
              ? <div className="billboard-tagline">
                  {this.state.tagline}
                </div>
              : null
            }
            <div className="billboard-flavor_text-container">
              <p className="billboard-flavor_text">{this.state.flavor_text}</p>
            </div>
          </Col>
          {this.state.link !== "" && this.state.link !== undefined
           ? <Button className="billboard-button" onClick={() => {this.props.setPage(this.state.link)}}>Learn More</Button>
           : null
          }
        </div>
    );
  }
}
