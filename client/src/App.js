import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

import { Menu } from './Menu/Menu';
import { Footer } from './Components/Footer';
import { Banner } from './Components/Banner';
import { Portal } from './Components/Portal';






//change service worker in index.js back to unregister before pushing to production
class App extends Component {
  render() {
    return (
      <Container className="parent">
        <Row>
          <Banner />
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
