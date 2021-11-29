const express = require('express');

module.exports = {
  getCategories: (req, res) => {
    const categories = [
      'clothes',
      'shoes',
      'accessories',
      'fire',
      'shelter',
      'food',
      'drink',
      'climbing',
      'hygiene',
      'protection',
      'entertainment',
      'medication',
      'sleeping',
    ];

    return res.status(200).json({ categories });
  },
};
