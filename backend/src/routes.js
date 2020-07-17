import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import SaleController from './app/controllers/SaleController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.post('/sale', SaleController.store);

export default routes;