import React, { Component } from 'react';
import { Thumbnail } from "./Thumbnail";

export class ThumbnailGridContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: this.props.language,
      thumbnailsContent: this.props.thumbnails,
      thumbnails: this.generateThumbnails(this.props.thumbnails),
      viewThumbnail: this.props.viewThumbnail
    }
    this.generateThumbnails = this.generateThumbnails.bind(this);
  }

  generateThumbnails(thumbnails){
    let thumbnailsList = [];
    for(let thumbnail in thumbnails){
      try{
        thumbnailsList.push(
          <Thumbnail
            viewThumbnail={this.state.viewThumbnail}
            content={thumbnails[thumbnail]}
            setPage={this.props.setPage}
            language={this.state.language}
          />
        )
      } catch(e){
        console.log("error: " + this.state)
      }
    }
    return thumbnailsList;
  }

  componentDidMount(){
    if(this.props.thumbnails){
      this.setState({
        thumbnailsContent: this.props.thumbnails,
        thumbnails: this.generateThumbnails(this.props.thumbnails)
      });
    }
  }

  componentDidUpdate(){
    if(this.state.thumbnailsContent !== this.props.thumbnails){
      this.setState({
        thumbnailsContent: this.props.thumbnails,
        thumbnails: this.generateThumbnails(this.props.thumbnails)
      });
    }
  }
  render(){
    try {
      return(
        <div className="thumbnail-grid">
          {this.state.thumbnails}
        </div>
      );
    } catch(e){
      console.log("thumbnail container error")
    }
  }
}
