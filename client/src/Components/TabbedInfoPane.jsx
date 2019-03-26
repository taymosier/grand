import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import { InfoPane } from './InfoPane';

export class TabbedInfoPane extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnDropleft: false
    }
  }
  render(){
    return(
      <div className="tabbed-info-pane">
        <InfoPane
          className={"airport-info-pane"}
          label={"Airport Info"}
          text={"Aeropuerto Internacional_/_Licenciado Gustavo Díaz Ordaz_/_Airport Code: PVR  Carretera a Tepic Km 7.5_/_48311 Puerto Vallarta,_/_Jalisco, México"}
        />
        <InfoPane
          className={"contact-info-pane"}
          label={"Contact Info"}
          text={"Phone: +52 (322) 226-4000_/_Address: Boulevard Riviera Nayarit #254 Bahia de Banderas,_/_Nayarit CP 63735"}
        /><InfoPane
          className={"contact-info-pane"}
          label={"Consulate Info"}
          text={"(An extension of the Consulate General in Guadalajara)_/_Paseo de los Cocoteros #85 Sur,_/_Paradise Plaza  Nuevo Vallarta,_/_Nayarit CP 63732_/_Phone: +52 (322) 222-0069_/_Fax: +52 (322) 223-0074_/_Email: conagencypuertov@state.gov"}
        />
      </div>

    );
  }
}
