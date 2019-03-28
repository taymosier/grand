import $ from 'jquery';
import React from "react";
// var screenSize = determineScreenSize();
// var currentURL = window.location.href;

export function generateComponentID(componentName, descriptor, descriptionLocation){
    let splitName = componentName.split("");
    let formattedName = splitName.replace(" ", "-");
    let formattedDescriptor = descriptor.replace(" ", "-");
    if(descriptionLocation === "before"){
      return formattedDescriptor + "-" + formattedName;
    }
    if(descriptionLocation === "after"){
      return formattedName + "-" + formattedDescriptor;
    }
    return null;
  }

export function formatTitle(name){
      let wordsInNameArray = name.split(" ");
      for(let i = 0; i < wordsInNameArray; i++){
        wordsInNameArray[i] = wordsInNameArray[i].toUppercase();
      }
      return wordsInNameArray.join(" ");
  }

  export function determineScreenSize(){
    let screenWidth = $(window).outerWidth(true);
    console.log(getScreenSize(screenWidth))
    return getScreenSize(screenWidth);
  }

  //returns a string descriptor of the screen size.
 function getScreenSize(width){
    if(width >= 1200){
      return 'xlarge';
    } else if (width >= 992 && width <= 1199 ){
      return 'large';
    } else if (width >=768 && width <= 991){
      return 'medium';
    } else if (width >= 576 && width <= 767){
      return 'small';
    } else if (width <= 575){
      return 'xsmall'
    } else {
      return null;
    }
  }

  export function capitalize(word){
    let strArray = word.split("");
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join("");
  }

  export function capitalizeEveryWord(text){
    let textArray = text.split(" ");
    for(let item in textArray){
      textArray[item] = capitalize(textArray[item])
    }
    return textArray.join(" ")
  }

  export function checkForSpecialClasses(contents){
    try{
      if(contents.class !== undefined && contents.class !== ""){
        return contents.class;
      }
      return null;
    } catch(e){
      console.log(e)
      return null;
    }
  }

  export function splitText(text, className, delimiter){
    let textSplit = text.split(/_\/_/g);
    let textBlocks = [];
    if(textSplit.length > 1){
      for(let item in textSplit){
        textBlocks.push(<p className={`${className}`} key={`${className}`}>{textSplit[item]}</p>)
      }
      return textBlocks;
    }
    return <p>{text}</p>;
  }
