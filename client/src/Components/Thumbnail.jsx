import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';


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
    let link;
    try{
      link = this.state.content.link;
    } catch(e){
      link = "home"
    }

    let style = {
      "backgroundImage": `url(${require("../../public/images/thumbnails/" + this.state.content.image)})`
    }

    return(
      <Col className="thumbnail-container" style={style} onClick={() => {this.props.setPage(link)}}>
        <div className="thumbnail-title">
        <p>{this.state.content.text.title["en"]}</p>
        </div>
        {this.state.content.text.flavor["en"] !== undefined
          ? <div className="thumbnail-flavor_text">
          {this.state.content.text.flavor["en"]}
          </div>
          : null
        }
        <div className="thumbnail-filter"></div>
      </Col>
    );
  }
}
