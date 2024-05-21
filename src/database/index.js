import Sequelize from 'sequelize';
import ConfigDatabase from '../config/database'
import User from '../app/models/User';
import Product from '../app/models/product';
import Category from '../app/models/Category';

const models = [User, Product, Category];

class Database {
   constructor() {

      this.init();
   }
   init() {
      this.connection = new Sequelize(ConfigDatabase);
      models.map((model) => model.init(this.connection)).map(
         (model) => model.associate && model.associate(this.connection.models),);
   }
}

export default new Database();