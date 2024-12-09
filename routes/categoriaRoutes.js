const express = require('express');
const { 
    crearCategoria, 
    obtenerCategorias, 
    actualizarCategoria, 
    eliminarCategoria 
} = require('../controllers/categoriaController');

const router = express.Router();

router.post('/', crearCategoria);
router.get('/', obtenerCategorias);
router.put('/:id', actualizarCategoria);
router.delete('/:id', eliminarCategoria);

module.exports = router;
