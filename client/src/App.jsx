import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import './App.css';
import routes from './data/routes.json';
import pages from './data/pages.json'

import { Menu } from './Menu/Menu';
import { Footer } from './Components/Footer';
import { Banner } from './Components/Banner';
import { Portal } from './Components/Portal';

const helpers = require('./helpers/dynamicCSS.js');


//change service worker in index.js back to unregister before pushing to production
class App extends Component {
  constructor(){
    super();
    this.state = {};
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeView: "acqua",
      pageContents: pages["acqua"],
      currentViewAddress: pages["acqua"].address,
      screenSize: helpers.determineScreenSize()
    })
  }

  setPage(page){
    if(this.state.activeView !== page){
      console.log('you clicked a different button')
      try{
        this.setState({
          activeView: page,
          pageContents: pages[page],
          currentViewAddress: pages[page].address,
          screenSize: helpers.determineScreenSize()
        })
      } catch (e){
        console.log(e)
      }
    }
  }

render() {
  return (
      <Container className="parent">
        <Row>
        { this.state.pageContents
          ? <Banner banner_info={this.state.pageContents.content.banner}/>
          : null
        }
        </Row>
        <Row>
          <Col
            xl={{ size: 2, offset: 1 }}
            lg={{ size: 3, offset: 0 }}
            md={{ size: 3, offset: 0 }}
            sm={{ size: 2, offset: 0 }}
          >
          {helpers.determineScreenSize() === "xsmall"
           ? <Menu collapsed={true} activeView={this.state.activeView} route={routes} setPage={this.setPage}/>
           : <Menu collapsed={false} activeView={this.state.activeView} route={routes} setPage={this.setPage}/>
          }
          </Col>
          <Col
            xl={{ size: 8, offset: 0 }}
            lg={{ size: 9, offset: 0 }}
            md={{ size: 8, offset: 0 }}
          >
          {this.state.pageContents
            ? <Portal activeView={this.state.activeView} page={this.state.pageContents}/>
            : null
          }
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container >
    );
  }
}

export default App;
