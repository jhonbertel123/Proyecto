const Categoria = require('../models/categoriaModels');

// Crear nueva categoría
exports.crearCategoria = async (req, res) => {
    try {
        const { nombre, descripcion, estado, observaciones } = req.body;
        const nuevaCategoria = new Categoria({ nombre, descripcion, estado, observaciones });
        await nuevaCategoria.save();
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todas las categorías
exports.obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una categoría por ID
exports.actualizarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoriaActualizada = await Categoria.findByIdAndUpdate(id, req.body, { new: true });
        if (!categoriaActualizada) return res.status(404).json({ message: "Categoría no encontrada" });
        res.status(200).json(categoriaActualizada);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una categoría por ID
exports.eliminarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoriaEliminada = await Categoria.findByIdAndDelete(id);
        if (!categoriaEliminada) return res.status(404).json({ message: "Categoría no encontrada" });
        res.status(200).json({ message: "Categoría eliminada" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
