import React, { Component } from 'react';
import { Col } from 'reactstrap';

import { ActiveView } from "../Views/ActiveView"

export class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: 'home',
      page: this.props.page
    };
  }

  componentDidMount(){
    console.log("ActiveView received mounted with props: ")
    console.log(this.props)
  }

  componentDidUpdate(){
    console.log("ActiveView received updated props")
    console.log(this.props)

    if(this.props.activeView !== this.state.activeView){
      this.setState({
        activeView: this.props.activeView,
        page: this.props.page
      })
    }
  }

  render(){
    return(
        <ActiveView activeView={this.state.activeView} content={this.state.page.content}/>
    );
  }
}
