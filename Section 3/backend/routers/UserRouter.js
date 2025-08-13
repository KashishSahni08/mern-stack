const express = require('express');

const router = express.Router();

router.get('/add',(req,res) => {
    res.send('add response from user router')
});

//getall
router.get('/getall',(req,res) => {
    res.send(' getall response from user router')
});

//getbyid
router.get('/getbyid',(req,res) => {
    res.send(' getbyid response from user router')
});

//delete
router.get('/delete',(req,res) => {
    res.send('delete response from user router')
});

//update
router.get('/update',(req,res) => {
    res.send(' update response from user router')
});

module.exports = router;