import React, { Component } from 'react';

export class StateChangeAlertBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: this.props.valuesBeingMonitored
    }
  }

  componentDidUpdate(){
    if(this.state.fields !== this.props.valuesBeingMonitored){
      this.setState({
        fields: this.props.valuesBeingMonitored
      })
    }
  }
  render(){
    let fields = [];
    for(let item in this.state.fields){
      fields.push(`| ${this.state.fields[item].label} : ${this.state.fields[item].value}`)
    }
    return(
      <div className="stateValuesContainer">{fields}</div>
    );
  }
}
