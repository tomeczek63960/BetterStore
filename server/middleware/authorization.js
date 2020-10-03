const jwt = require('jsonwebtoken');
const config = require('config');

const authorization = (req, res, next) => {
    const authHeader = req.headers.token;
    
    try{
        const token = authHeader.split(' ')[1];
        const user = jwt.verify(token, process.env.JWT_KEY);
        req.user = user;

        next(); 

    }catch(err){
        res.status(401).send({ msg: "Brak dostępu do danych" });
    }
};

module.exports = authorization;