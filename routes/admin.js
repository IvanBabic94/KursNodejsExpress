const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const productsControler = require('../controllers/products');


// /admin/add-product => GET
router.get('/add-product', productsControler.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsControler.postAddProducts);

module.exports = router;
