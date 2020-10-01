const jwt = require('jsonwebtoken');
const config = require('config');

const authorization = (req, res, next) => {
    const authHeader = req.headers.token;
    
    try{
        const token = authHeader.split(' ')[1];
        const user = jwt.verify(token, config.get('jwtSecretKey'));
        req.user = user;

        next(); 

    }catch(err){
        res.status(401).send({ msg: "Brak dostępu do danych" });
    }
};

module.exports = authorization;