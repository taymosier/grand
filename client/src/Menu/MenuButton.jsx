import React, {Component} from 'react';
import { NavItem } from 'reactstrap';


export class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      portal: this.props.route,
      title: this.formatTitle(this.props.name),
      id: this.generateComponentID(this.props.name, "menu-button", "affter")
    };
  }

generateComponentID(componentName, descriptor, descriptionLocation){
    let formattedName = componentName.replace(" ", "-");
    let formattedDescriptor = descriptor.replace(" ", "-");
    if(descriptionLocation === "before"){
      return formattedDescriptor + "-" + formattedName;
    }
    if(descriptionLocation === "after"){
      return formattedName + "-" + formattedDescriptor;
    }
    return null;
  }

formatTitle(name){
    let wordsInNameArray = name.split(" ");
    for(let i = 0; i < wordsInNameArray; i++){
      wordsInNameArray[i] = wordsInNameArray[i].toUppercase();
    }
    return wordsInNameArray.join(" ");
}

render(){
  return(
    <NavItem className='menuButton' id={this.state.id} >{this.state.option}</NavItem>
  );
}
}
