import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { Billboard } from "Components/Billboard";

export class Billboard extends Component {
  constructor(props){
    super(props);
  }
  this.state = {
    "image": "",
    "subheader": "",
    "header": "",
    "flavor": ""
  };
  render(){
    return(
      <div>
        { this.state.image
          ? <img className=""/>
          : null
        }
        <div className=".billboard-subheader"></div>
        <div className=".billboard-header"></div>
        { this.state.action
          ? <Button />
          : null
        }
      </div>
    );
  }
}
