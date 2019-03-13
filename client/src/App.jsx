import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import './App.css';
import routes from './data/routes.json';
import pages from './data/pages.json'

import { Menu } from './Menu/Menu';
import { MenuModalToggleButton } from './Menu/MenuModalToggleButton';
import { MenuModal } from './Menu/MenuModal';
import { Footer } from './Components/Footer';
import { Banner } from './Components/Banner';
import { Portal } from './Components/Portal';


const helpers = require('./helpers/dynamicCSS.js');


//change service worker in index.js back to unregister before pushing to production
class App extends Component {
  constructor(){
    super();
    this.state = {
      contactForm: false,
      menuModal: false
    };
    this.setPage = this.setPage.bind(this);
    this.toggleContactForm = this.toggleContactForm.bind(this);
    this.toggleMenuModal = this.toggleMenuModal.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeView: "home",
      pageContents: pages["home"],
      currentViewAddress: pages["home"].address,
      contactForm: false,
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
          menuModal: false,
          screenSize: helpers.determineScreenSize()
        })
      } catch (e){
        console.log(e)
      }
    }
  }

  toggleContactForm(){
    let toggle = !this.state.contactForm;
    this.setState({
      contactForm: toggle
    });
  }

  toggleMenuModal(){
    this.setState({
      menuModal: !this.state.menuModal
    })
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
          className="menu-column"
            xl={{ size: 2, offset: 1 }}
            lg={{ size: 3, offset: 0 }}
            md={{ size: 12, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
          >
          {helpers.determineScreenSize() === "xsmall"
           ? <MenuModalToggleButton toggle={this.toggleMenuModal}/>
           : <Menu collapsed={false} activeView={this.state.activeView} route={routes} setPage={this.setPage}/>
          }
          {helpers.determineScreenSize() === "xsmall"
           ? <MenuModal isOpen={this.state.menuModal} toggle={this.toggleMenuModal}  activeView={this.state.activeView} setPage={this.setPage}/>
           : null
          }
          </Col>
          <Col
            xl={{ size: 8, offset: 0 }}
            lg={{ size: 9, offset: 0 }}
            md={{ size: 8, offset: 0 }}
          >
          {this.state.pageContents
            ? <Portal activeView={this.state.activeView} page={this.state.pageContents} toggleContactForm={this.toggleContactForm}/>
            : null
          }
          </Col>
        </Row>
        <Row>
          <Footer></Footer>
        </Row>
      </Container >
    );
  }
}

export default App;
