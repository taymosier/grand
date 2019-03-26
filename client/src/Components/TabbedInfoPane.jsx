import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export class TabbedInfoPane extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnDropleft: false
    }
  }
  render(){
    return(
      <Dropdown
        direction="left"
        isOpen={this.state.btnDropleft}
        toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}
      >
        <DropdownToggle caret>
          Airport Info
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            Aeropuerto Internacional Licenciado Gustavo Díaz Ordaz  Airport Code: PVR  Carretera a Tepic Km 7.5  48311 Puerto Vallarta, Jalisco, México
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
