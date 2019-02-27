
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
