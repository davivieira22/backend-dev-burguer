
import {Router} from 'express'
const { request, response } = require('./App')

const routes = new Router()

 routes.get('/',(request,response)=>{
return response.status(200).json({messege:'deu certo '})


 })
export default routes