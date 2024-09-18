import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;


// console.log("MONGO_URI:", mongoURI);

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
  }
};

export default connectDB;
