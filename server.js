const mongoose = require('mongoose');
const app = require('./app');
const DB_HOST =
  'mongodb+srv://oleks:freedom2023@cluster0.cgf1jdk.mongodb.net/contacts_reader?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log('Database connection successful');
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
