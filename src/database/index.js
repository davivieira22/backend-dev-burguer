import Sequelize from 'sequelize';
import ConfigDatabase from '../config/database'
import User from '../app/models/User';
import Product from '../app/models/product';

const models=[User,Product];

 class Database{
    constructor(){

       this.init();
    }
    init(){
        this.connection = new Sequelize(ConfigDatabase);
        models.map((model) => model.init(this.connection));
    }
 }

 export default new Database();