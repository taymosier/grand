import React, { Component } from 'react';
import { ActiveView } from "../Views/ActiveView"

export class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {
      setLanguage: this.props.setLanguage,
      activeView: this.props.activeView,
      page: this.props.page,
      viewThumbnail: this.props.viewThumbnail
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
        <ActiveView
          activeView={this.state.activeView}
          content={this.state.page.content}
          language={this.props.language}
          setLanguage={this.state.setLanguage}
          setPage={this.props.setPage}
          toggleContactForm={this.props.toggleContactForm}
          viewThumbnail={this.state.viewThumbnail}
        />
    );
  }
}
