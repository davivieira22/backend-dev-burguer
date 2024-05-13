
import Multer from 'multer';
import {extname,resolve} from 'path';
import { v4 } from 'uuid';

export default {
    storage:Multer.diskStorage({
        destination: resolve(__dirname,'..','..','uploads'),
        filename:( request,file,callback)=>
         callback(null,v4() + extname(file.originalname))
             

    })
}