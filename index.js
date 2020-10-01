const express = require('express');
const app = express();
const cors = require('cors');

const productRouter = require("./server/router/product");

// middleware
app.use(express.static('.'));
app.use( express.json() );
app.use( cors() );

app.use('/products', productRouter);

app.listen(5500);