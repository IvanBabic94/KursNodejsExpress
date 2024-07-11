const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const productsControler = require('../controllers/products');

const router = express.Router();

router.get('/', productsControler.getProducts);

module.exports = router;
