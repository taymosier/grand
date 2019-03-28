import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class PreviousPageButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      previous: this.props.previous
    };
  }

  componentDidUpdate(){
    if(this.state.previous !== this.props.previous){
      this.setState({
        previous: this.props.previous
      });
    }
  }
  render(){
    return(
      <Button className={"previous-page-button"} onClick={() => { this.props.setPage(this.state.previous)}}>Previous Page</Button>
    )
  }
}
