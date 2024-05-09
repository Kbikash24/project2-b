const path = require('path');

const express = require('express');
const productConroller=require('../controllers/product')

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productConroller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productConroller.postAddProduct)

module.exports=router;
