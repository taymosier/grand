import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Grand

export class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      google: this.props.google
    }
  }
  componentDidMount(){
    if(this.props){
      this.setState({google:this.props.google})
      this.loadMap();
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.google !== this.props.google){
      this.setState({google:this.props.google})
      this.loadMap();
      console.log(this.props)
    }
  }

  loadMap() {
      const maps = this.state.google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 35.597825, lng: -77.330829},
        zoom: 16,
        gestureHandling: 'cooperative',
        mapTypeId: 'roadmap',
        disableDefaultUI: true,
      });
      this.map = new maps.Map(node, mapConfig);
  }

  render(){
    return(
        <div className="googleMap" ref="map" >
          loading map...
        </div>
    );
  }
}
