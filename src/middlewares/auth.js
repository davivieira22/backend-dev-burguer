import jwt from 'jsonwebtoken';
import authConfig from '../config/auth'



const authMiddleware = (request, response, next) => {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({ error: 'token nao autorizado' })
    }
    const token = authToken.split(' ').at(1);

    try {
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                throw new Error();
            }

            request.userId = decoded.id;

        });
    } catch (err) {
        return response.status(401).json({ error: 'token invalido ' })
    }

    return next()
};



export default authMiddleware;