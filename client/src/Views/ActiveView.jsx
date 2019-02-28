import React, { Component } from 'react';

import { BillboardContainer } from "../Components/BillboardContainer";
import { ThumbnailGridContainer } from "../Components/ThumbnailGridContainer";


export class ActiveView extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: this.props.content,
    };
  }

  componentDidMount(){
    console.log(this.props)
    if(this.props.content){
      this.setState({
        content: this.props.content
      })
    }
  }

  componentDidUpdate(){
    try{
      if(this.props.content !== this.state.content){
        this.setState({
          content: this.props.content
        })
      }
    } catch(e){
      console.log(e)
    }
  }

  render(){
    return(
      <div className="default-child">
        {this.props.content.text.header !== undefined
          ? <h1 className="page-header">{this.props.content.text.header}</h1>
          : null
        }
        {this.props.content.text.description !== undefined
          ? <div className="page-description">{this.props.content.text.description}</div>
          : null
        }
        {this.state.content.billboards !== undefined
          ? <BillboardContainer billboards={this.state.content.billboards} />
          : null
        }
        {this.state.content.images.thumbnails !== undefined
          ? <ThumbnailGridContainer thumbnails={this.state.content.images.thumbnails} />
          : null
        }
      </div>
    );
  }
}
