const express = require('express');

const router = express.Router();

const gear = require('../controllers/gear.controller');

router.get('/', gear.findAll);
router.get('/:categoryId', gear.findByCategoryId);

module.exports = router;
