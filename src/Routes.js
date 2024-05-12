
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import Multer from 'multer';
import MulterConfig from "./config/multer"

const routes = new Router();

const upload =Multer(MulterConfig)

 routes.post('/users', UserController.store);
 routes.post('/sessio',SessionController.store);
 routes.post('/products',upload.single('file'),ProductController.store);


export default routes;  