const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { type } = require('os');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    // console.log(con.connections);
    console.log('DB connection succesful');
  });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
