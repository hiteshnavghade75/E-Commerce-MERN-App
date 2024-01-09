const express = require('express');
const Product = require('../model/productModel')

const productRouter = express.Router();
productRouter.post('/addProduct', async (req, res) => {
    try {
        console.log(req.body);

        const data = new Product(req.body);
        const dataSave = await data.save();
        res.status(200).json({
            message : "Data sent successfully",
            result : dataSave
        })
    } catch (error) {
        res.status(400).json({
            message : "Error sending the data",
            err : error
        })
    }
});

module.exports = productRouter;