import path from 'path';
import fs from 'fs';
import cors from 'cors';

import express from 'express';
import generateHTML from './htmlGenerator'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import App from '../client/src/App';

const PORT = 8080;
const app = express();

const router = express.Router()

const serverRenderer = (req, res, next ) => {
  fs.readFile(path.resolve('./client/build/index.html'), 'utf8', (err, data) => {
    if( err ) {
      console.error(err);
      return res.status(500).send('An error occurred')
    }
    console.log(req)
    let html = generateHTML(data)
    return res.send(html)
  })
}
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.post('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    console.log(`Request body: ${req.body.answer}`)
  } catch(e){
    console.error(`Error: ${e}`)
  }
  res.send(JSON.stringify('HELLOOOOOOOO'))
})
router.use('^/$', serverRenderer)
router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d'})
)

app.use(router)


app.post('/test', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    console.log(`Request body: ${req.body.answer}`)
  } catch(e){
    console.error(`Error: ${e}`)
  }
  res.send(JSON.stringify('HELLOOOOOOOO'))
})

app.post('/rooms', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    console.log(`Request body: ${req.body.answer}`)
  } catch(e){
    console.error(`Error: ${e}`)
  }
  res.send(JSON.stringify('You have made a request for /rooms'))
})

app.post('/dining', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    console.log(`Request body: ${req.body.answer}`)
  } catch(e){
    console.error(`Error: ${e}`)
  }
  res.send(JSON.stringify('You have made a request for /dining'))
})

app.post('/entertainment', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    console.log(`Request body: ${req.body.answer}`)
  } catch(e){
    console.error(`Error: ${e}`)
  }
  res.send(JSON.stringify('You have made a request for /entertainment'))
})

app.post('/spa', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    console.log(`Request body: ${req.body.answer}`)
  } catch(e){
    console.error(`Error: ${e}`)
  }
  res.send(JSON.stringify('You have made a request for /spa'))
})

app.post('/golf', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try{
    console.log(`Request body: ${req.body.answer}`)
  } catch(e){
    console.error(`Error: ${e}`)
  }
  res.send(JSON.stringify('You have made a request for /spa'))
})

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
