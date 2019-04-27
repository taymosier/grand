import React, { Component } from 'react';

import { Billboard } from "./Billboard";
import { BillboardWithImage } from "./BillboardWithImage";
import { BillboardWithMap } from "./BillboardWithMap";
import { BillboardWithModal } from "./BillboardWithModal";


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
      billboards.push(this.getBillBoardByType(billboardContents[item],billboardContents[item].type, language, this.props.setPage))
    }
    return billboards;
  }

  getBillBoardByType(contents, type, language, setPage){
    let billboard;
    switch(type){
      case "default":
        billboard = <Billboard language={language} contents={contents} key={contents.name} setPage={setPage}/>
        break;
      case "image":
        billboard = <BillboardWithImage language={language} contents={contents} key={contents.name} setPage={setPage}/>;
        break;
      case "map":
        billboard = <BillboardWithMap language={language} />;
        break;
      case "modal":
        billboard = <BillboardWithModal language={language} contents={contents} key={contents.name} setPage={setPage}/>;
        break;
      default:
        break;
    }
    return billboard;
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
