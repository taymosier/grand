
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

export default function generateHTML(data) {
  let initialProps = getPageAttributes();
  data = data.replace(
    '<head>',
    `<head><script>window.__INITIAL__DATA__ = ${JSON.stringify({initialProps})}</script>`
  )
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${ReactDOMServer.renderToString(<App initialProps={initialProps}/>)}</div>`
  )
  return data;
}

function getPageAttributes(){
  let data = {
    "activeView": "",
    "contactFormVisible": "",
    "language": "en",
    "menuModal": false,
    "pageContents": "",
    "previousPage": "",
    "registrationFormVisible": "",
    "thumbnail": ""
  }
  return data;
}
