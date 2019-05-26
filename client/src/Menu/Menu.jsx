import React, { Component } from 'react';
import { Col, Collapse, Nav, Navbar, NavbarToggler } from 'reactstrap';

import { MenuButton } from './MenuButton';

export class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: this.props.language,
      collapsed: this.props.collapsed,
      activeRoot: this.props.activeRoot,
      activeParent: this.props.activeParent,
      rootItems: this.props.rootItems,
      branchItems: this.props.branchItems,
      leafItems: this.props.leafItems,
      activeItem: this.props.activeView,
      buttons: this.getMenuButtons(this.props.language)
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  componentDidUpdate(){
    if(this.state.activeItem !== this.props.activeView || this.state.language !== this.props.language){
      this.setState({
        language: this.props.language,
        collapsed: this.props.collapsed,
        activeRoot: this.props.activeRoot,
        activeParent: this.props.activeParent,
        rootItems: this.props.rootItems,
        branchItems: this.props.branchItems,
        leafItems: this.props.leafItems,
        activeItem: this.props.activeView,
        buttons: this.getMenuButtons(this.props.language)
      });
    }
  }

  toggleNavbar(){
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  generateActiveMenu(rootItems, branchItems, leafItems, activePage, activeParent, activeRoot){
    let generatedMenu = [];
    for(let item in rootItems){
      generatedMenu.push(<MenuButton name={item.id} setPage={this.props.setPage}/>);
      if(item.id === activeRoot){
        for(let branch in branchItems[item.id]){
          generatedMenu.push(<MenuButton name={branch.id} setPage={this.props.setPage}/>);
          if(branch.id === activeParent){
            for(let leaf in leafItems[branch.id]){
              generatedMenu.push(<MenuButton name={leaf.id} setPage={this.props.setPage}/>);
            }
          }
        }
      }
    }
    try {
      return generatedMenu
    } catch(e){
      console.log("error returning generated menu " + e)
    }
  }

  getMenuButtons(language){
    if(language === "en"){
      return ["Home","rooms", "getting here","dining","what to do","golf","spa","entertainment", "new offerings"];
    }
    if(language === "es"){
      return ["inicio","habitaciones", "como llegar","gastronomia","que hacer","golf","spa","entretenimientio", "novedades"];
    }
  }

  render(){
    let topLevelButtons = this.state.buttons;
    let englishButtons = this.getMenuButtons("en");
    let button;
    let buttonList = [];
    for(let i =0; i < topLevelButtons.length; i++){
      button = <MenuButton text={topLevelButtons[i]} key={englishButtons[i]} name={topLevelButtons[i]} setPage={this.props.setPage}/>;
      buttonList.push(button);
    }
    return(
      <Col className="menu-container"
        xl={{ size: 12, offset: 0 }}
        lg={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        sm={{ size: 10, offset: 1 }}
      >
      <Navbar >
      <NavbarToggler onClick={this.toggleNavbar} className="menuToggler">
        <svg className="menuToggleIcon">
          <line x1="5" y1="11" x2="45" y2="11"></line>
          <line x1="5" y1="22" x2="45" y2="22"></line>
          <line x1="5" y1="33" x2="45" y2="33"></line>
        </svg>
      </NavbarToggler>
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="menu" vertical>
            {buttonList}
          </Nav>
        </Collapse>
      </Navbar>
      </Col>
    );
  }
}
