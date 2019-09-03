const { Schema, model } = require('mongoose');

const producto = new Schema({
   titulo: { type: String},
   descripcion: { type: String },
   email: { type: String },
   name: { type: String },
   path: { type: String },
   originalname: { type: String },
   mimetype: { type: String },
   destination: { type: String },
   filename: { type: String },
   size: { type: String },
   precio: { type: String },
   categoria: { type: String },
   create_at: { type: Date, default: Date.now }
});

module.exports = model('producto', producto);