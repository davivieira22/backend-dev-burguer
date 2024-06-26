import Sequelize from 'sequelize';
import ConfigDatabase from '../config/database'
import User from '../app/models/User';
import Product from '../app/models/product';
import Category from '../app/models/Category';
import mongoose from 'mongoose';

const models = [User, Product, Category];

class Database {
   constructor() {

      this.init();
      this.mongo();
   }
   init() {
      this.connection = new Sequelize(ConfigDatabase);
      models.map((model) => model.init(this.connection)).map(
         (model) => model.associate && model.associate(this.connection.models),);
   }
   mongo() {
      this.mongoConnection = mongoose.connect(
         'mongodb://localhost:27017/devburger',
      );
   }
}

export default new Database();