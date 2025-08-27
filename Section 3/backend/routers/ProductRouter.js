const express = require('express');
const Model = require('../models/ProductModel');

const router = express.Router();

router.post('/add',(req,res) => {
     console.log(req.body);
      
     new Model(req.body).save()
     .then((result) => {
        res.status(200).json(result);
     })
     .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    
     });
});
router.get('/getbystock/:stock',(req,res) => {
    Model.find({stock: req.params.stock})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


//getall
router.get('/getall',(req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        res.status(500).json(err);
        
    });
});
router.get('/getbyname/:name',(req,res) => {
    Model.findOne({name: req.params.name})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//getbyid
router.get('/getbyid/:id',(req,res) => {
    Model.findById({_id: req.params.id})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete
router.delete('/deletebyid/:id',(req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/update/:id',(req,res)=> {
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}) 

//update
router.get('/updateproduct',(req,res) => {
    res.send(' update product response from product router')
});

module.exports = router;