
import express from 'express'
import routes from './Routes';
import './database';
import {resolve} from 'node:path';
import cors from 'cors'

class App {
    constructor() {
        this.app = express()
        this.app.use(cors());
        this.middlewares();
        this.routes();
       
    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(
            '/product-file',
            express.static(resolve(__dirname,'..','Uploads')),
        );
        this.app.use(
            '/category-file',
            express.static(resolve(__dirname,'..','Uploads')),
        );
    }
    routes() {
this.app.use(routes)
    }


}
export default new App().app;