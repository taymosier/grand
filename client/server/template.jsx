require('@babel/register');
import React, { Component } from 'react';
import pages from '../src/data/pages.json'
import ReactDOMServer from 'react-dom/server';




function injectScriptNode(html, attribute, value){
  html = html.replace(
    '<head>',
    `<head><script ${attribute}=${value} id=${attribute}Node></script>`
  )
  console.log(`Contents Added - ${attribute} Script:\n ${html}`)
  return html;
}
export default function template(requestedPage, html, body, props){
  let pageContent = pages[requestedPage].content;
  let template = html;
  template = injectScriptNode(template, "content", JSON.stringify(pageContent));
  template = injectScriptNode(template, "props", JSON.stringify(props));
  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div>`
  )
  console.log(`\nTemplate Contents - Added Component HTML:\n ${template}`)
  return template;
};
