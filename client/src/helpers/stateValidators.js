export function  checkForEmptyAttributes(attr){
  if(attr === null || attr === undefined){
    console.log('empty attribute found')
    return null;
  }
  return attr;
}
