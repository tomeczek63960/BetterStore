const router = require('express').Router();
const config = require('config');
const stripe = require('stripe')( config.get('stripeSecretKey') );

const YOUR_DOMAIN = 'http://localhost:4200';

router.post('/', async (req, res) => {
  const products = req.body.products;
  const checkoutProducts = [];

  products.forEach(product => {
        const newCheckoutProduct = {
            price_data: {
                currency: 'pln',
                product_data: {
                  name: product.title,
                  images: [product.img],
                },
                unit_amount: Math.round(product.price * 100),
              },
              quantity: product.amount,
        };

        checkoutProducts.push(newCheckoutProduct);
    });

    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: checkoutProducts, 
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/checkout/success`,
            cancel_url: `${YOUR_DOMAIN}/cart`,
        });
        res.json({ id: session.id });
    } catch(err){
        res.status(500).send({ msg: "Błąd po stonie serwera" });
    }

});

module.exports = router;