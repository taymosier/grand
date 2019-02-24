import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import './App.css';

import { Menu } from './Menu/Menu';
import { Footer } from './Components/Footer';
import { Banner } from './Components/Banner';
import { Portal } from './Components/Portal';






//change service worker in index.js back to unregister before pushing to production
class App extends Component {
  constructor(){
    super();
    this.state = {
      banner: 'grand-luxxe-banner.jpg',
      active: 'home',
      text: '',
      subheading: ''
    };
  }
  render() {
    //TODO - add subheading prop to Banner component
    //     - set Banner props based on the active view selected
    //    
    const defaultState = {
      "banner": "",
      "active": "",
      "text": {
        "heading": "",
        "description": "",
      },
      "billboards": [
        {
          "heading": "",
          "images": ""
        },
        {
          "heading": "",
          "images": ""
        }
      ]
    };
    return (
      <Container className="parent">
        <Row>
          <Banner src={this.state.banner}/>
        </Row>
        <Row>
          <Menu />
          <Portal />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container >
    );
  }
}

export default App;
