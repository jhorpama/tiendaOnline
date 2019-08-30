const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.post('/api/producto', controller.subirProducto);
router.get('/api/productos', controller.verProductos);

module.exports = router;