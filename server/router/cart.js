const router = require('express').Router();
const cartModel = require('../mongoose/model/cart');
const authorization = require('../middleware/authorization');

router.get('/', authorization, async (req, res) => {
    const user = req.user;
   
    try{
        const fetchReq = await cartModel.find({ email: user.email });
        res.send(fetchReq);

    }catch(err){
        res.status(500).send({ msg: 'Błąd po stronie servera' });
    }
});

router.post('/', authorization, async (req, res) => {
    const user = req.user;
    const { productId, amount, price, img, title } = req.body;

    const filter = { email: user.email, productId };

    try{
        const isProductInCart = await cartModel.find(filter);
        
        if(isProductInCart[0]){
            const update = { amount: isProductInCart[0].amount + amount };
            const updatedProduct = await cartModel.findOneAndUpdate(filter, update );

            return res.send(updatedProduct);

        } else {
            const newProductInCart = new cartModel({
                email: user.email,
                productId,
                amount,
                img,
                price,
                title
            });
            const fetchReq = await newProductInCart.save();

            return res.send(fetchReq);
        }

    }catch(err){
        res.status(500).send({ msg: 'Błąd po stronie servera' });
    }
});

router.delete('/:_id', authorization, async (req,res) => {
    const user = req.user;
    const { _id } = req.params;

    try{
        const deleted = await cartModel.findOneAndRemove({ email: user.email, productId: _id });
       if(!deleted) return res.send({ msg: "Niema takiego produktu" });

        res.send({ msg: "Produkt usunięty z koszyka" });
    }catch(err){
        res.status(500).send({ msg: 'Błąd po stronie servera' });
    }

});

router.delete("/", authorization, async (req, res) => {
    const user = req.user;

    try{
        const fetchReq = await cartModel.deleteMany({ email: user.email });
        res.send({ msg: "Produkty usunięte pomyślnie" });
    }catch(err){
        res.status(500).send({ msg: 'Błąd po stronie servera' });
    }
});

module.exports = router;