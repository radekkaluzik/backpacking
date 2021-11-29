const express = require('express');

const router = express.Router();

const categoriesService = require('../services/categories.service');

router.get('/', categoriesService.getCategories);

module.exports = router;
