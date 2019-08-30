const Producto = require('../models/producto');
const controller = {};

controller.subirProducto = async (req, res) => {
//    console.log(req.body);
//    console.log(req.file);
   const producto = new Producto();
   producto.filename = req.file.filename;
   producto.path = '/img/' + req.file.filename;
   producto.originalname = req.file.originalname;
   producto.mimetype = req.file.mimetype;
   producto.size = req.file.size;
   producto.destination = req.file.destination;
   producto.email = req.body.email;
   producto.name = req.body.name;
   producto.titulo = req.body.titulo;
   producto.descripcion = req.body.descripcion;
   producto.precio = req.body.precio;

   await producto.save();

   res.json(
    producto
   );
};

controller.verProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

module.exports = controller;