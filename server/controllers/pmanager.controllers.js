const mongoose = require("mongoose"),
    ProductManagerSchema = require("../models/pmanager.model"),
    ProductManager = mongoose.model("Products", ProductManagerSchema)

class ProductController{
    index(req, res){
        ProductManager.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json(err))
    }
    create(req, res) {
        ProductManager.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json(err) )
    }
    show(req, res){
        ProductManager.findById({_id:req.params.id})
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
    }
    update(req, res){
        ProductManager.findByIdAndUpdate({_id:req.params.id},req.body,{runValidators:true})
            .then( editProduct => res.json({msg:"Success"}))
            .catch(err => res.json(err));
    }
    delete(req, res){
        ProductManager.deleteOne({_id:req.params.id})
            .then( message => res.json(message) )
            .catch( err => res.json(err) )
    }
    
}

module.exports = new ProductController();