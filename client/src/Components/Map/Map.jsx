import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Grand

export class Map extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    if(this.props){
      this.setState({google:this.props.google})
      this.loadMap();
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.config !== undefined){
      this.setState({
        mapConfig: {
          center: {
            lat: this.props.config.center.lat,
            lng: this.props.config.center.lng
          },
          zoom: this.props.config.zoom,
          gestureHandling: this.props.config.gestureHandling,
          mapTypeId: this.props.mapTypeId,
          disableDefaultUI: this.props.disableDefaultUI,
        }
      })
    }
    if(this.state.google !== this.props.google){
      this.setState({google:this.props.google})
      this.loadMap();
      console.log(this.props)
    }
  }

  loadMap() {
      let maps = this.props.google.maps;
      let mapRef = this.refs.map;
      let node = ReactDOM.findDOMNode(mapRef);

      let mapConfig = Object.assign({}, {
        center: {lat: 20.683125, lng: -105.285340},
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
