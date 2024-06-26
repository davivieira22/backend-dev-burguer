
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import Multer from 'multer';
import MulterConfig from "./config/multer";
import authMiddleware from './app/middlewares/auth';

import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';
const routes = new Router();

const Upload = Multer(MulterConfig)

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/products', Upload.single('file'), ProductController.store);
routes.get('/products',  ProductController.index)
routes.put('/products/:id', Upload.single('file'), ProductController.update);

routes.post('/categories',Upload.single('file'),  CategoryController.store);
routes.get('/categories',  CategoryController.index);
routes.put('/categories/:id', Upload.single('file'), CategoryController.update);

routes.post('/orders',OrderController.store);
routes.get('/orders',OrderController.index);
routes.put('/orders/:id',OrderController.update);

export default routes;  