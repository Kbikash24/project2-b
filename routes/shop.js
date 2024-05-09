const path = require('path');

const express = require('express');

const productConroller=require('../controllers/product')
const router = express.Router();

router.get('/', productConroller.getProducts);

module.exports = router;
