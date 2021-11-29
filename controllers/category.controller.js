const Category = require('../models/category.model');

// Create and Save a new category
// exports.create = (req, res) => {};

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  const { name } = req.query;

  Category.getAll(name, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving categories.',
      });
    } else res.send(data);
  });
};

// Find a single category with a id
// exports.findOne = (req, res) => {};

// Update a category identified by the id in the request
// exports.update = (req, res) => {};

// Delete a category with the specified id in the request
// exports.delete = (req, res) => {};

// Delete all categories from the database.
// exports.deleteAll = (req, res) => {};

// https://www.bezkoder.com/node-js-rest-api-express-mysql/
