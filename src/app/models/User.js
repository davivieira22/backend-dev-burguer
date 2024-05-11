import Sequelize, { Model } from 'sequelize'
import Bcrypt from 'bcrypt'
class User extends Model {

    static init(sequelize) 
    {
        super.init({
            name:Sequelize.STRING,
            email:Sequelize.STRING,
            password:Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            admin: Sequelize.BOOLEAN,
        },
        {
            sequelize,
        },
        );
      this.addHook('beforeSave',async(User)=>{
     if(User.password){
        User.password_hash= await Bcrypt.hash(User.password,10);

      }
       }) 
       return this;
    }
    
 async comparePassWord(password){

 return Bcrypt.compare(password,this.password_hash);

};
}

export default  User;