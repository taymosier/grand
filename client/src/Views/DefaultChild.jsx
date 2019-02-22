import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class DefaultChild extends Component {
  constructor(props){
    super(props);
    this.state = {
      "custom-top": '',
      "custom-bottom": ''
    };
  }
  render(){
    return(
      <div className="default-child">
        { this.state["custom-top"]
            ? <div className="custom-top"></div>
            : null
        }
        { this.state["custom-bottom"]
            ? <div className="custom-bottom"></div>
            : null
        }
      </div>
    );
  }
}
