import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send('Order system');
});

routes.get('/menu', (request, response) => {
  return response.send('menu page');
});

export default routes;
