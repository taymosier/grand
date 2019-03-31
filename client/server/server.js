import serverRenderer from './middleware/renderer';

const express = require('express');
const path = require('path');
const app = express();


const PORT = 9000;
const router = express.Router();

router.use('^/$', serverRenderer);

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' }
));

app.use(router);

app.listen(PORT, (error) =>{
  if(error) {
    return console.log('something bad happened', error);
  }
  console.log("listening on: " + PORT)
})
// app.use(express.static(path.join (__dirname, '..', 'build')));
//
// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
// });
//
// app.listen(9000);
