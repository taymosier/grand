import React, { Component } from 'react';

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
    this.state = {
      "contents": this.props.contents,
      "name": this.formatNameForID(this.props.contents.name),
      "title": this.props.contents.title,
      "tagline": this.props.contents.tagline,
      "image": this.props.contents.image,
      "flavor_text": this.props.contents.flavor_text,
      "button_link": this.props.contents.action_link
    };
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
          <div className="billboard-image-container">
            { this.state.image
              ? <img className="billboard-image" src={require("../../public/images/billboards/"+this.state.image)}/>
              : null
            }
          </div>
          <div className="billboard-text-container">
            <div className="billboard-title">{this.state.title}</div>
            <div className="billboard-tagline">{this.state.tagline}</div>
            <div className="billboard-flavor_text">{this.state.flavor_text}</div>
          </div>
        </div>
    );
  }
}
