const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    estado: { type: String, enum: ['activo', 'inactivo'], required: true },
    observaciones: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Categoria', categoriaSchema);
