import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import './App.css';
import routes from './data/routes.json';
import pages from './data/pages.json'

import { Menu } from './Menu/Menu';
import { Footer } from './Components/Footer';
import { Banner } from './Components/Banner';
import { Portal } from './Components/Portal';






//change service worker in index.js back to unregister before pushing to production
class App extends Component {
  constructor(){
    super();
    this.state = {
      activeView: pages.home.content.title,
      mainContent: pages.home.content.main,
      banner: pages.home.content.banner,
      currentViewAddress: pages.home.address
    };
  }

render() {
  return (
      <Container className="parent">
        <Row>
          <Banner src={this.state.banner}/>
        </Row>
        <Row>
          <Menu routes={routes} activeViewRoute={this.state.activeViewAddress} />
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
