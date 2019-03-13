import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export class ContactFormGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.field.name,
      type: this.props.field.type,
      id: this.props.field.name + 'Field',
      placeholder: this.props.field.placeholder,
      hasLabel: this.props.field.hasLabel,
      label: this.props.field.label,
      value: this.props.field.value
    };
  }

  componentDidUpdate(prevProps){
    if(this.props !== prevProps){
      this.setState({
        value: this.props.field.value
      })
    }
  }
  render(){
    let value = this.state.value;
    let dropDownOptions = []
    for(let item in this.props.field.options){
      dropDownOptions.push(<option>{this.props.field.options[item]}</option>)
    }
    return(
      <FormGroup>
        {this.state.hasLabel
          ? <Label for={this.state.name}>{this.state.label}</Label>
          : null
        }
        <Input type={this.state.type} name={this.state.name} id={this.state.id} placeholder={this.state.placeholder} onChange={this.props.onChange} value={this.state.value}>
        {this.props.field.options
          ? dropDownOptions
          : null
        }
        </Input>
      </FormGroup>
    )
  }
}
