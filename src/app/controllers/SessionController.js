import *as Yup from 'yup'
import User from '../models/User';
import jwt from 'jsonwebtoken'
import authconfig from '../../config/auth'
class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
        })
        const isValid = await schema.isValid(request.body);

        const isvalidEmail = () => {
            response.status(401)
                .json({ error: 'email ou senha esta incorreto' })
        }


        if (!isValid) {
            return isvalidEmail()
        }
        const { email, password } = request.body;
        const user = await User.findOne({
            where: {
                email,
            }


        })
        if (!user) {
            return isvalidEmail()
        }
        const isSamePassword = await user.comparePassWord(password);


        if (!isSamePassword) {
            return isvalidEmail()
        }


        return response.status(201).json({
            id: user.id,
            name: user.name,
            email,
            admin: user.adimin,
            token: jwt.sign({id:user.id,name:user.name},authconfig.secret,{
                expiresIn:authconfig.expiresIn,
            }),
        });
    }
}


export default new SessionController();