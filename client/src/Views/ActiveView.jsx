import React, { Component } from 'react';

import { BillboardContainer } from "../Components/Billboards/BillboardContainer";
import { ThumbnailGridContainer } from "../Components/Thumbnails/ThumbnailGridContainer";
import { ImageCarousel } from '../Components/Carousel/ImageCarousel';

import {BillboardWithMap} from '../Components/Billboards/BillboardWithMap';

const helpers = require('../helpers/dynamicCSS.js');

export class ActiveView extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: this.props.language,
      content: this.props.content,
      pageName: this.props.activeView,
      setLanguage: this.props.setLanguage,
      imageGalleryHasContents: this.checkForContents(this.props.content.images.gallery),
      viewThumbnail: this.props.viewThumbnail
    };
  }

  componentDidMount(){
    if(this.props.content){
      this.setState({
        language: this.props.language,
        content: this.props.content,
        imageGalleryHasContents: this.checkForContents(this.props.content.images.gallery)
      })
    }
  }


  componentDidUpdate(){
    try{
      if(this.props.content !== this.state.content || this.props.language !== this.state.language){
        this.setState({
          language: this.props.language,
          content: this.props.content,
          pageName: this.props.activeView,
          imageGalleryHasContents: this.checkForContents(this.props.content.images.gallery),
          contactFormVisible: false
        })
      }
    } catch(e){
      console.log(e)
    }
  }


  checkForContents(array){
    if(array.length === 0 || array.length === undefined){
      return {display: "none"};
    }
    return null;
  }
  render(){
    let imageFolder;
    if(this.state.content.images.gallery[0] !== undefined){
      imageFolder = this.state.content.images.gallery[0].folder;
    } else {
      imageFolder = "";
    }
    return(
      <div className="default-child">

        {this.props.content.text.header[this.state.language] !== undefined
          ? <h1 className="page-header">
              {helpers.capitalizeEveryWord(this.state.content.text.header[this.state.language])}
            </h1>
          : null
        }
        {this.props.content.map === true
          ? <BillboardWithMap language={this.state.language}/>
          : null
        }
        {this.props.content.text.description[this.state.language] !== undefined
          ? <div className="page-description">
                {helpers.splitText(this.props.content.text.description[this.state.language], "description")}
            </div>
          : null
        }
        {this.state.content.images.gallery !== [] || this.state.content.images.gallery !== undefined
          ? <ImageCarousel
              galleryImages={this.state.content.images.gallery}
              imageFolder={imageFolder}
              style={this.state.imageGalleryHasContents}
            />
          : null
        }
        {this.state.content.billboards !== undefined
          ? <BillboardContainer
              billboards={this.state.content.billboards}
              setPage={this.props.setPage}
              language={this.state.language}
            />
          : null
        }
        {this.state.content.images.thumbnails !== undefined
          ? <ThumbnailGridContainer
              thumbnails={this.state.content.images.thumbnails}
              setPage={this.props.setPage}
              language={this.state.language}
              viewThumbnail={this.state.viewThumbnail}
            />
          : null
        }
      </div>
    );
  }
}
