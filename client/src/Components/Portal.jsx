import React, { Component } from 'react';
import { ActiveView } from "../Views/ActiveView"

export class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: this.props.activeView,
      page: this.props.page
    };
  }

  componentDidMount(){

  }

  componentDidUpdate(){
    if(this.props.activeView !== this.state.activeView){
      this.setState({
        activeView: this.props.activeView,
        page: this.props.page
      })
    }
  }

  render(){
    return(
        <ActiveView activeView={this.state.activeView} content={this.state.page.content} toggleContactForm={this.props.toggleContactForm} setPage={this.props.setPage}/>
    );
  }
}
