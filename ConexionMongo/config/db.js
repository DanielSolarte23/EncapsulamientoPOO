import mongoose from "mongoose";

export const conexionDB = async () => {
  try {
    mongoose.connect("mongodb+srv://DanSol:Dansol@cluster0.miuyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
        useNewURLParser: true,
        useUnifiedTopology:true
    });
    console.log("Conectado a mongoDB");
    
  } catch (error) {
    console.log(`Error en la conexion ${error}`);
  }  
};