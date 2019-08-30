const express = require('express');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const cors = require('cors');
const chalk = require('chalk');
const path = require('path');
const multer = require('multer');

// Initialization
const app = express();
require('./database');

// Setting
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('short'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Multer
const ruta = path.join(__dirname);
const storage = multer.diskStorage({
     destination: ruta + '/public/img',
     filename: (req, file, cb, filename) => {
         cb(null, uuid() + path.extname(file.originalname));
     }
});

app.use(multer(multer({
    storage
 })).single('image'));

console.log(ruta);

// Routes
app.use(require('./routes/routes'));

// Static Files
app.use(express.static(path.join(__dirname, './public')));

// The run server
app.listen(app.get('port'), () => {
    console.log(chalk.bgGreen.blue('Run server on port', app.get('port')));
});