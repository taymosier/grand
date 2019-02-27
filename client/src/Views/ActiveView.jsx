import React, { Component } from 'react';

export class ActiveView extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
    };
  }

  componentDidMount(){
    console.log("ActiveView received mounted with props: ")
    console.log(this.props)
    if(this.props.content){
      this.setState({
        content: this.props.content
      })
    }
  }

  componentDidUpdate(){
    try{
      if(this.props.content !== this.state.content){
        console.log("ActiveView received updated props")
        this.setState({
          content: this.props.content
        })
      }
    } catch(e){
      console.log(e)
    }
  }

  render(){
    return(
      <div className="default-child">
        {this.props.content.text.description}
      </div>
    );
  }
}
