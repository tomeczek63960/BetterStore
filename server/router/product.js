const router = require('express').Router();
const productModel = require("../mongoose/model/product");

const findStartEndIndex = (req) => {
    const limit = parseInt(req.headers.limit);
    const page = parseInt(req.headers.page);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return ({ limit, page, startIndex, endIndex });
}

const getPaginationResponseData = ({ startIndex, endIndex, documentsQuantity, limit, page }) => {
    const response = {};

    if(startIndex > 1){
        response.prev = {
            page: page - 1,
            limit: limit
        }
    }
    if(endIndex < documentsQuantity){
        response.next = {
            page: page + 1,
            limit: limit
        }
    }
    response.total = {
        page: Math.ceil(documentsQuantity / limit)
    }

    return response;
}

router.get('/', async (req, res) => {
   
    const { limit, page, startIndex, endIndex } = findStartEndIndex(req);

    try{
        const documentsQuantity = await productModel.countDocuments();
        const fetchReq = await productModel.find({}).skip(startIndex).limit(limit);

        let response = getPaginationResponseData({ startIndex, endIndex, documentsQuantity, limit, page });
        response.response = fetchReq;

        res.send(response);

    }catch(err){
        res.status(500).send({ msg: "Błąd po stronie servera" });
    }
});

router.get('/filter', async (req, res) => {
    const filter = req.headers;
    const filterObj = {};

    const { limit, page, startIndex, endIndex} = findStartEndIndex(req);

    if( filter.category ){
        filterObj.category = { $in: filter.category.split(',') };
    }
    if(filter.range){
        const priceArr = filter.range.split('-');
        filterObj.price = {
            $lte: parseInt(priceArr[1]),
            $gte: parseInt(priceArr[0])
        };
    }
    if(filter.title){
        filterObj.title = {
            $regex: filter.title, 
            $options: 'i'
        }
    }
        
    try{
        const documentsQuantity = await productModel.find( filterObj ).countDocuments();
        const fetchReq = await productModel.find( filterObj ).skip(startIndex).limit(limit);
        
        let response = getPaginationResponseData({ startIndex, endIndex, documentsQuantity, limit, page });
        response.response = fetchReq;

        res.send(response);

    }catch(err){
        res.status(500).send({ msg: "Błąd po stronie servera" });
    }
});

router.get('/category/:category', async (req, res) => {
    const { category } = req.params;

    try{
        const fetchReq = await productModel.find({ category });
        res.send(fetchReq);

    } catch(err){
        res.status(500).send({ msg: "Błąd po stronie servera" });
    }
});

router.get('/:_id', async (req, res) => {
    const { _id } = req.params;

    try{
        const fetchReq = await productModel.findById( _id );
        res.send(fetchReq);

    } catch(err) {
        res.status(500).send({ msg: "Błąd po stronie servera" });
    }
});

module.exports = router;