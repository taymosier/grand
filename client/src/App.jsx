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
      activeView: "home",
      pageContents: pages.home,
      currentViewAddress: pages.home.address
    };
    this.setPage = this.setPage.bind(this);
  }

  setPage(page){
    if(this.state.activeView !== page){
      console.log('you clicked a different button')
      try{
        this.setState({
          activeView: page,
          pageContents: pages[page],
          currentViewAddress: pages[page].address
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
          <Banner banner_info={this.state.pageContents.content.banner}/>
        </Row>
        <Row>
          <Menu activeViewRoute={this.state.currentViewAddress} route={routes} setPage={this.setPage}/>
          <Portal activeView={this.state.activeView} page={this.state.pageContents}/>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container >
    );
  }
}

export default App;
