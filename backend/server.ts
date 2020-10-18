import express from 'express';

const app = express();

app.get('/', function (request, response) {
  response.send('Order system');
});

app.listen(8080, function () {
  console.log('App is listening on port 8080!');
});