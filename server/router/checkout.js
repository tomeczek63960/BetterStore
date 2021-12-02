const router = require('express').Router();
const config = require('config');
const stripe = require('stripe')( process.env.STRIPE_KEY );

const YOUR_DOMAIN = 'https://betterstore.herokuapp.com';

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
            line_items: checkoutProducts, 
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/cart/checkout/success`,
            cancel_url: `${YOUR_DOMAIN}`,
        });
        res.json({ id: session.id });
    } catch(err){
        res.status(500).send({ msg: "Błąd po stonie serwera" });
    }

});

module.exports = router;