const sql = require('./db');

// constructor
const Gear = (gear) => {
  this.name = gear.name;
};

// Gear.create = (newGear, result) => {
//   sql.query('INSERT INTO gear SET ?', newGear, (err, res) => {
//     if (err) {
//       console.log('error: ', err);
//       result(err, null);
//       return;
//     }

//     console.log('created gear: ', { id: res.insertId, ...newGear });
//     result(null, { id: res.insertId, ...newGear });
//   });
// };

// Gear.findById = (id, result) => {
//   sql.query(`SELECT * FROM gear WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log('error: ', err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log('found gear: ', res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found gear with the id
//     result({ kind: 'not_found' }, null);
//   });
// };

Gear.getAll = (name, result) => {
  const queryGear = 'SELECT * FROM gear';
  const queryCategory = 'SELECT * FROM category';

  sql.query(queryCategory, (err, categoryRes) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    }

    sql.query(queryGear, (error, gearRes) => {
      if (err) {
        console.log('error: ', error);
        result(null, err);
      }

      const response = categoryRes.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.name]: gearRes.filter((item) => item.categoryId === curr.id),
        }),
        {}
      );

      result(null, response);
    });
  });
};

// Gear.updateById = (id, gear, result) => {
//   sql.query(
//     'UPDATE gear SET name = ? WHERE id = ?',
//     [gear.name, id],
//     (err, res) => {
//       if (err) {
//         console.log('error: ', err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows === 0) {
//         // not found gear with the id
//         result({ kind: 'not_found' }, null);
//         return;
//       }

//       console.log('updated gear: ', { id, ...gear });
//       result(null, { id, ...gear });
//     }
//   );
// };

// Gear.remove = (id, result) => {
//   sql.query('DELETE FROM gear WHERE id = ?', id, (err, res) => {
//     if (err) {
//       console.log('error: ', err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows === 0) {
//       // not found gear with the id
//       result({ kind: 'not_found' }, null);
//       return;
//     }

//     console.log('deleted gear with id: ', id);
//     result(null, res);
//   });
// };

// Gear.removeAll = (result) => {
//   sql.query('DELETE FROM gear', (err, res) => {
//     if (err) {
//       console.log('error: ', err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} pieces of gear`);
//     result(null, res);
//   });
// };

module.exports = Gear;
