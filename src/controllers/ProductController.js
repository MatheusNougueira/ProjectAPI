const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limi: 10});

        return res.json(products);
    },

    async ShadowRoot(req, res){
        const product = await Product.findById(req.params.id); 

        return res.json(product);
    },

    async Store(req, res){
        const Product = await Product.create(req.body);

        return res.json(Product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.param.id, req.body, {new: true})
    
        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};

