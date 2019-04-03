import serverRenderer from './renderer';
import React, { Component } from 'react';
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var proxyaddr = require('proxy-addr');
const PORT = 9000;

router.use('^/$', serverRenderer);
router.use('^/rooms$', serverRenderer);
router.use('^/getting-here$', serverRenderer);
router.use('^/dining$', serverRenderer);
router.use('^/what-to-do$', serverRenderer);
router.use('^/entertainment$', serverRenderer);
router.use('^/golf$', serverRenderer);
router.use('^/spa$', serverRenderer);
router.use('^/whats-new$', serverRenderer);




router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
app.use(cors());
app.use(router);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.listen(PORT, (error) =>{
  if(error){
    return console.log('something bad happened: ', error)
  }
  console.log("listening on: " + PORT);
});
