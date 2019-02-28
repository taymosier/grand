import React, { Component } from 'react';


export class Thumbnail extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: this.props.content
    }
  }

  componentDidMount(){
    this.setState({
      content: this.props.content
    })
  }

  componentDidUpdate(){
    if(this.state.content !== this.props.content){
      this.setState({
        content: this.props.content
      })
    }
  }
  render(){
    return(
      <div className="thumbnail-container">
        <div className="thumbnail-filter"></div>
          <img src={require("../../public/images/thumbnails/" + this.state.content.image)}></img>
          <div className="thumbnail-title">
            <p>{this.state.content.text.title}</p>
          </div>
          {this.state.content.text.flavor !== undefined
            ? <div className="thumbnail-flavor_text">
            {this.state.content.text.flavor}
            </div>
            : null
          }
      </div>
    );
  }
}
