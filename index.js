const express = require('express');
const app = express();
const cors = require('cors');

const productRouter = require("./server/router/product");
const authRouter = require('./server/router/auth');
const cartRouter = require('./server/router/cart');
const checkoutRouter = require('./server/router/checkout');

// middleware
app.use(express.static('.'));
app.use( express.json() );
app.use( cors() );

app.use('/products', productRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter)

app.listen(process.env.PORT || 5500);