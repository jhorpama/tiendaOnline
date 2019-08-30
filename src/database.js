const mongoose = require('mongoose');
const chalk = require('chalk');

const URL = 'mongodb://localhost/productos';

mongoose.connect(URL, {
    useNewUrlParser: true
}).then(db => {
    console.log(chalk.bgBlue.white('DB is connected'));
}).catch(err => {
   console.error(err);
});

module.exports = mongoose;