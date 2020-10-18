import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Order system');
});

app.listen(8080, () => {
  console.log('App is running on port 8080!');
});
