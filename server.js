const app = require('./index');

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running in http://127.0.0.1:${PORT}`);
});
