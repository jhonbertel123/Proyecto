const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    estado: { type: String, enum: ['activo', 'inactivo'], required: true },
    observaciones: { type: String },
    calificacion: { 
        type: Number, 
        min: 1, 
        max: 5, 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Categoria', categoriaSchema);
