const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Configura explicitamente strictQuery para evitar la advertencia
    mongoose.set('strictQuery', true); // o false según tus necesidades

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar a MongoDB: ${error.message}`);
    process.exit(1); // Detener la aplicación si no se puede conectar
  }
};

module.exports = connectDB;
