const express = require('express');

const router = express.Router();

// const categoriesService = require('../services/categories.service');

// router.get('/', categoriesService.getCategories);

const categories = require('../controllers/category.controller');

router.get('/', categories.findAll);

module.exports = router;
