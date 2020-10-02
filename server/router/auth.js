const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const authorization = require('../middleware/authorization');
const loginModel = require('../mongoose/model/auth');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try{
        const isMatchingUser = await loginModel.find({ email });
        if(!isMatchingUser[0]) return res.status(400).send({ msg: "Niepoprawne dane logowania" });
        
        const isCorrectPassword = bcrypt.compareSync(password, isMatchingUser[0].password);
        if(!isCorrectPassword) return res.status(400).send({ msg: "Niepoprawne dane logowania" });

        const tokenData = {
            _id: isMatchingUser[0]._id,
            email: isMatchingUser[0].email
        };
        const token = jwt.sign(tokenData, process.env.JWT_KEY );

        res.send({ token });
    }catch(err){
        res.status(500).send({ msg: "Błąd po stronie servera" });
    }
});

router.post('/register', async (req, res) => {
    const { email, password, name, surname } = req.body;

    try{
        const existEmailInDb = await loginModel.find({ email });
        if(existEmailInDb[0]) return res.status(400).send({ msg: "Podany E-mail jest zajęty" });

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = new loginModel({
            email,
            password: hashPassword,
            name,
            surname
        });

        const fetchReq = await newUser.save();
        res.send(fetchReq);

    }catch(err){
        res.status(500).send({ msg: "Błąd po stronie servera" });
    }
});

router.get('/', authorization, async (req, res) => {
    const user = req.user;
  
    try{
        const fetchReq = await loginModel.find({ email: user.email });
        res.send( fetchReq[0] );
    }catch(err){
        res.status(500).send({ msg: "Błąd po stronie servera" });
    }
});

router.post('/', authorization, async (req, res) => {
    const user = req.user;
    const { name, surname, email, oldPassword, newPassword } = req.body.data; 
    
    let toUpdate = { name, surname, email };

    try{
        const isMatchingUser = await loginModel.find({ email: user.email });

        if(oldPassword && newPassword){

            const isCorrectPassword = bcrypt.compareSync(oldPassword, isMatchingUser[0].password);
            if(!isCorrectPassword) return res.status(400).send({ msg: "Stare hasło nie jest poprawne" });
            
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(newPassword, salt);

            toUpdate.password = hashPassword;

        }else{
            toUpdate.password = isMatchingUser[0].password;
        }

        const updatedUser = await loginModel.findOneAndUpdate({ email: user.email }, toUpdate);

        res.send(updatedUser);
    }catch(err){
        res.status(500).send({ msg: "Błąd po stronie servera" });
    }
});

router.get('/authentication', authorization, async (req, res) => {
    res.send(true);
});

module.exports = router;