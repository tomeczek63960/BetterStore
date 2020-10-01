const express = require('express');
const app = express();
const cors = require('cors');

const productRouter = require("./server/router/product");
const authRouter = require('./server/router/auth');

// middleware
app.use(express.static('.'));
app.use( express.json() );
app.use( cors() );

app.use('/products', productRouter);
app.use('/auth', authRouter);

app.listen(5500);