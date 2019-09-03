const mongoose = require('mongoose');
const chalk = require('chalk');

//const URL = 'mongodb://localhost/productos';
const URL = 'mongodb://jhor:jhor12345@ds217208.mlab.com:17208/heroku_hmhntpjq'

mongoose.connect(URL, {
    useNewUrlParser: true
}).then(db => {
    console.log(chalk.bgBlue.white('DB is connected'));
}).catch(err => {
   console.error(err);
});

module.exports = mongoose;