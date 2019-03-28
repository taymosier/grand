import React, { Component } from 'react';
import { ButtonGroup } from 'reactstrap';
import { LanguageToggleButton } from './LanguageToggleButton';

export class LanguageButtonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render(){
    let languages = [
      { value:"en", text:"English" },
      { value:"es", text:"Espanol" }
    ];

    let languageButtons = [];
    for(let language in languages){
      languageButtons.push(<LanguageToggleButton key={`${languages[language].value}`} value={languages[language].value} className={`button-language-${language}`} setLanguage={this.props.setLanguage}  language={languages[language].text} />)
    }
    return(<ButtonGroup className={"language-button-container"}>
            {languageButtons}
           </ButtonGroup>);
  }
}
