import React, { Component } from 'react';
import App from '../src/App';
require('@babel/register');
import ReactDOMServer from 'react-dom/server';
import template from './template';

const path = require("path");
const fs = require("fs");


export default (req, res, next) => {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
    let page;
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        console.log(`Renderer.jsx: \n\tVVV Reading in file [path] VVV\n\t${filePath}`)
        err ? res.status(404).end() : console.log("\tNo errors found.\n")
        req.originalUrl.slice(1).length === 0 ? page="home" : page = req.originalUrl.slice(1);
        let props = getDefaultProps();
        let body = ReactDOMServer.renderToString(<App {...props}/>);
        let htmlResponse = template(page, htmlData, body, props);
        console.log(`-------SENDING DATA-------`)
        res.send(htmlResponse);
    });
}


function getDefaultProps(){
  return {
    "language": "en",
    "activeView": "home",
    "previousPage": "",
    "pageContents": "",
    "contactFormVisible": false,
    "registrationFormVisible": false,
    "menuModal": false,
    "thumbnail": null,
    "screenSize": null
  };
}
