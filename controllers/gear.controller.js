const Gear = require('../models/gear.model');

// Create and Save a new gear
// exports.create = (req, res) => {};

// Retrieve all gear from the database (with condition).
exports.findAll = (req, res) => {
  const { name } = req.query;

  Gear.getAll(name, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving gear.',
      });
    } else res.send(data);
  });
};

// Find a single gear with a id
// exports.findOne = (req, res) => {};

// Find gear by categoryId
exports.findByCategoryId = (req, res) => {
  Gear.findByCategoryId(req.params.categoryId, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving gear.',
      });
    } else res.send(data);
  });
};

// Update a gear identified by the id in the request
// exports.update = (req, res) => {};

// Delete a gear with the specified id in the request
// exports.delete = (req, res) => {};

// Delete all pieces of gear from the database.
// exports.deleteAll = (req, res) => {};
