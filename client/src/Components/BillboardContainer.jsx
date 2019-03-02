import React, { Component } from 'react';

import { Billboard } from "./Billboard";


export class BillboardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
      billboards: ""
    };
    this.generateBillboards = this.generateBillboards.bind(this);
  }

  generateBillboards(billboardContents){
    let billboards = [];
    for(let item in billboardContents){
      try{
        billboards.push(<Billboard contents={billboardContents[item]} />)
      } catch(e){
        console.log(this.state)
      }
    }
    return billboards;
  }

  componentDidMount(){
    this.setState({
      content: this.props.billboards,
      billboards: this.generateBillboards(this.props.billboards)
    });
  }

  componentDidUpdate(){
    if(this.state.content !== this.props.billboards){
      this.setState({
        content: this.props.billboards,
        billboards: this.generateBillboards(this.props.billboards)
      })
    }

  }

  render(){


    return(
      <div className="billboards-container">
        {this.state.billboards}
      </div>
    );
  }
}
