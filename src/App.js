
import express from 'express'
import routes from './Routes';
import './database';
import {resolve} from 'path';
class App {
    constructor() {
        this.app = express()
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.json())
        this.app.use(
            '/prduct-file',
            express.static(resolve(__dirname,'..','Uploads')),
        );
    }
    routes() {
this.app.use(routes)
    }


}
export default new App().app;