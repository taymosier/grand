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
      activeView: "home",
      previousPage: "",
      pageContents: pages["home"],
      contactFormVisible: false,
      registrationFormVisible: false,
      menuModal: false,
      thumbnail: null
    };
    this.closeThumbnail = this.closeThumbnail.bind(this);
    this.viewThumbnail = this.viewThumbnail.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.toggleContactForm = this.toggleContactForm.bind(this);
    this.toggleMenuModal = this.toggleMenuModal.bind(this);
    this.toggleRegistrationProcessInfo = this.toggleRegistrationProcessInfo.bind(this);
  }

  closeThumbnail(){
    this.setState({
      thumbnail: null
    })
  }

  componentDidMount(){
    this.setState({
      activeView: "home",
      pageContents: pages["home"],
      currentViewAddress: pages["home"].address,
      contactFormVisible: false,
      registrationFormVisible: false,
      screenSize: helpers.determineScreenSize()
    })
  }


  setPage(page){
    if(this.state.activeView !== page){
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
        if(this.state.previousPage !== this.props.activeView){
          this.setState({
            previousPage: this.state.activeView
          })
        }
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

  viewThumbnail(thumbnail){
    this.setState({
      thumbnail: thumbnail
    });
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
            xl={{ size: 2, offset: 0 }}
            lg={{ size: 2, offset: 0 }}
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
                previousPage={this.state.previousPage}
                setPage={this.setPage}
                contactFormVisible={this.state.contactFormVisible}
                toggleContactForm={this.toggleContactForm}
                registrationInfoVisible={this.state.registrationInfoVisible}
                closeThumbnail={this.closeThumbnail}
                thumbnail={this.state.thumbnail}
              />
            : null
          }
          <Col
            xl={{ size: 8, offset: 0 }}
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
                viewThumbnail={this.viewThumbnail}
              />
            : null
          }
          </Col>
          { this.state.screenSize !== "xsmall" && this.state.screenSize !== "small"
            ? <Toolbar
                setLanguage={this.setLanguage}
                language={this.state.language}
                previousPage={this.state.previousPage}
                setPage={this.setPage}
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
