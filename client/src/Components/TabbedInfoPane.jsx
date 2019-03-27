import React, { Component } from 'react';
import { InfoPane } from './InfoPane';

export class TabbedInfoPane extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnDropleft: false,
    }
    this.setActivePane = this.setActivePane.bind(this);
  }

  setActivePane(name){
    if(this.state.activeInfoPane === name){
      this.setState({
        activeInfoPane: null
      });
    } else {
      this.setState({
        activeInfoPane: name
      });
    }
  }

  isActive(active, name){
    if(active === name){
      return true;
    }
    return false
  }

  render(){
    return(
      <div className="tabbed-info-pane">
        <InfoPane
          setActivePane={this.setActivePane}
          isOpen={this.isActive(this.state.activeInfoPane, "airport-info")}
          name={"airport-info"}
          label={"Airport Info"}
          id={"airportInfoBtn"}
          text={"Aeropuerto Internacional_/_Licenciado Gustavo Díaz Ordaz_/_Airport Code: PVR  Carretera a Tepic Km 7.5_/_48311 Puerto Vallarta,_/_Jalisco, México"}
        />
        <InfoPane
          setActivePane={this.setActivePane}
          isOpen={this.isActive(this.state.activeInfoPane, "contact-info")}
          name={"contact-info"}
          label={"Contact Info"}
          id={"contactInfoBtn"}
          text={"Phone: +52 (322) 226-4000_/_Address: Boulevard Riviera Nayarit #254 Bahia de Banderas,_/_Nayarit CP 63735"}
        /><InfoPane
          setActivePane={this.setActivePane}
          isOpen={this.isActive(this.state.activeInfoPane, "consulate-info")}
          name={"consulate-info"}
          label={"Consulate Info"}
          id={"consulateInfoBtn"}
          text={"(An extension of the Consulate General in Guadalajara)_/_Paseo de los Cocoteros #85 Sur,_/_Paradise Plaza  Nuevo Vallarta,_/_Nayarit CP 63732_/_Phone: +52 (322) 222-0069_/_Fax: +52 (322) 223-0074_/_Email: conagencypuertov@state.gov"}
        />
      </div>

    );
  }
}
