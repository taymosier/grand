import React, { Component } from 'react';

import { Billboard } from "./Billboard";
import { BillboardWithImage } from "./BillboardWithImage";


export class BillboardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: "",
      content: "",
      language: this.props.language,
      billboards: this.generateBillboards(this.props.billboards, this.props.language)
    };
    this.generateBillboards = this.generateBillboards.bind(this);
  }

  generateBillboards(billboardContents, language){
    let billboards = [];
    for(let item in billboardContents){
      if(billboardContents[item].image){
        try{
          billboards.push(<BillboardWithImage language={language} contents={billboardContents[item]} key={billboardContents[item].name} setPage={this.props.setPage}/>)
        } catch(e){
          console.log("whoops!")
        }
      } else {
        try{
          billboards.push(<Billboard language={language} contents={billboardContents[item]} key={billboardContents[item].name} setPage={this.props.setPage}/>)
        } catch(e){
          console.log(this.state)
        }
      }
    }
    return billboards;
  }

  componentDidMount(){
    this.setState({
      activeView: this.props.activeView,
      content: this.props.billboards,
      language: this.props.language,
      billboards: this.generateBillboards(this.props.billboards, this.props.language)
    });
  }

  componentDidUpdate(){
    if(this.state.content !== this.props.billboards || this.state.language !== this.props.language){
      this.setState({
        activeView: this.props.activeView,
        content: this.props.billboards,
        language: this.props.language,
        billboards: this.generateBillboards(this.props.billboards, this.props.language)
      })
    }
    if(this.state.activeView !== this.props.activeView){
      this.setState({
        activeView: this.props.activeView,
        content: this.props.billboards,
        language: this.props.language,
        billboards: this.generateBillboards(this.props.billboards, this.props.language)
      });
    }
  }

  render(){
    return(
      <div className="billboards-container">
        {this.state.billboards !== undefined && this.state.billboards !== []
          ? this.state.billboards.map((billboard) => {
            return billboard
          })
          : null
        }
      </div>
    );
  }
}
