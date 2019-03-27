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
import { Toolbar } from './Components/Toolbar';


const helpers = require('./helpers/dynamicCSS.js');


//change service worker in index.js back to unregister before pushing to production
class App extends Component {
  constructor(){
    super();
    this.state = {
      language: "en",
      pageContents: pages["getting here"],
      contactFormVisible: false,
      registrationFormVisible: false,
      menuModal: false,
      screenSize: helpers.determineScreenSize()
    };
    this.setLanguage = this.setLanguage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.toggleContactForm = this.toggleContactForm.bind(this);
    this.toggleMenuModal = this.toggleMenuModal.bind(this);
    this.toggleRegistrationProcessInfo = this.toggleRegistrationProcessInfo.bind(this);


  }

  componentDidMount(){
    this.setState({
      activeView: "getting here",
      pageContents: pages["getting here"],
      currentViewAddress: pages["getting here"].address,
      contactFormVisible: false,
      registrationFormVisible: false,
      screenSize: helpers.determineScreenSize()
    })
  }


  setPage(page){
    if(this.state.activeView !== page){
      console.log('you clicked ' + page)
      try{
        this.setState({
          activeView: page,
          pageContents: pages[page],
          currentViewAddress: pages[page].address,
          contactFormVisible: false,
          registrationFormVisible: false,
          menuModal: false,
          screenSize: helpers.determineScreenSize()
        })
      } catch (e){
        console.log(e)
      }
    }
  }


  setLanguage(e){
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
      language: `${e.target.value}`
    });
  }


  toggleContactForm(){
    let toggle = !this.state.contactFormVisible;
    this.setState({
      contactFormVisible: toggle
    });
  }


  toggleMenuModal(){
    this.setState({
      menuModal: !this.state.menuModal
    })
  }

  toggleRegistrationProcessInfo(){
    this.setState({
      registrationInfoVisible: !this.state.registrationInfoVisible
    })
  }


render() {
  return (
      <Container className="parent">
        <Row>

        { this.state.pageContents
          ? <Banner
              language={this.state.language}
              banner_info={this.state.pageContents.content.banner}
            />
          : null
        }
        </Row>
        <Row>
          <Col
            className="menu-column"
            xl={{ size: 3, offset: 0 }}
            lg={{ size: 3, offset: 0 }}
            md={{ size: 0, offset: 0 }}
            sm={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
          >
          {this.state.screenSize === "xsmall" || this.state.screenSize === "small" || this.state.screenSize === "medium"
            ? <MenuModalToggleButton toggle={this.toggleMenuModal}/>
            : <Menu
                collapsed={false}
                activeView={this.state.activeView}
                route={routes}
                setPage={this.setPage}
                language={this.state.language}
              />
          }
          {this.state.screenSize !== "xsmall" || this.state.screenSize !== "small" || this.state.screenSize === "medium"
           ? <MenuModal
               isOpen={this.state.menuModal}
               toggle={this.toggleMenuModal}
               activeView={this.state.activeView}
               setPage={this.setPage}
               language={this.state.language}
             />
           : null
          }
          </Col>
          { this.state.screenSize === "xsmall" || this.state.screenSize === "small"
            ? <Toolbar
                setLanguage={this.setLanguage}
                language={this.state.language}
                contactFormVisible={this.state.contactFormVisible}
                toggleContactForm={this.toggleContactForm}
                registrationInfoVisible={this.state.registrationInfoVisible}
              />
            : null
          }
          <Col
            xl={{ size: 6, offset: 0 }}
            lg={{ size: 7, offset: 0 }}
            md={{ size: 7, offset: 1 }}
          >

          {this.state.pageContents
            ? <Portal
                language={this.state.language}
                activeView={this.state.activeView}
                page={this.state.pageContents}
                setLanguage={this.setLanguage}
                setPage={this.setPage}
                toggleContactForm={this.toggleContactForm}
              />
            : null
          }
          </Col>
          { this.state.screenSize !== "xsmall" && this.state.screenSize !== "small"
            ? <Toolbar
                setLanguage={this.setLanguage}
                language={this.state.language}
                contactFormVisible={this.state.contactFormVisible}
                registrationInfoVisible={this.state.registrationInfoVisible}
                toggleContactForm={this.toggleContactForm}
                toggleRegistrationProcessInfo={this.toggleRegistrationProcessInfo}
              />
            : null
          }
        </Row>
        <Row>
          <Footer></Footer>
        </Row>
      </Container >
    );
  }
}

export default App;
