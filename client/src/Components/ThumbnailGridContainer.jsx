import React, { Component } from 'react';
import { Thumbnail } from "../Components/Thumbnail";

export class ThumbnailGridContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      thumbnailsContent: this.props.thumbnails,
      thumbnails: this.generateThumbnails(this.props.thumbnails)
    }
    this.generateThumbnails = this.generateThumbnails.bind(this);
  }

  generateThumbnails(thumbnails){
    let thumbnailsList = [];
    for(let thumbnail in thumbnails){
      try{
        thumbnailsList.push(<Thumbnail content={thumbnails[thumbnail]} />)
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
    return(
      <div className="thumbnail-grid">
        {this.state.thumbnails}
      </div>
    );
  }
}
