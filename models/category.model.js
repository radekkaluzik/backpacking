const sql = require('./db');

// constructor
const Category = (category) => {
  this.name = category.name;
};

// Category.create = (newCategory, result) => {
//   sql.query('INSERT INTO category SET ?', newCategory, (err, res) => {
//     if (err) {
//       console.log('error: ', err);
//       result(err, null);
//       return;
//     }

//     console.log('created category: ', { id: res.insertId, ...newCategory });
//     result(null, { id: res.insertId, ...newCategory });
//   });
// };

// Category.findById = (id, result) => {
//   sql.query(`SELECT * FROM category WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log('error: ', err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log('found category: ', res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found category with the id
//     result({ kind: 'not_found' }, null);
//   });
// };

Category.getAll = (name, result) => {
  let query = 'SELECT name FROM category';

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('categories: ', res);
    result(
      null,
      res.map((item) => item.name)
    );
  });
};

// Category.updateById = (id, category, result) => {
//   sql.query(
//     'UPDATE category SET name = ? WHERE id = ?',
//     [category.name, id],
//     (err, res) => {
//       if (err) {
//         console.log('error: ', err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows === 0) {
//         // not found category with the id
//         result({ kind: 'not_found' }, null);
//         return;
//       }

//       console.log('updated category: ', { id, ...category });
//       result(null, { id, ...category });
//     }
//   );
// };

// Category.remove = (id, result) => {
//   sql.query('DELETE FROM category WHERE id = ?', id, (err, res) => {
//     if (err) {
//       console.log('error: ', err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows === 0) {
//       // not found category with the id
//       result({ kind: 'not_found' }, null);
//       return;
//     }

//     console.log('deleted category with id: ', id);
//     result(null, res);
//   });
// };

// Category.removeAll = (result) => {
//   sql.query('DELETE FROM category', (err, res) => {
//     if (err) {
//       console.log('error: ', err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} categories`);
//     result(null, res);
//   });
// };

module.exports = Category;
