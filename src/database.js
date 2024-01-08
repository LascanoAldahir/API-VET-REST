//Impórtar mongoose
import mongoose from 'mongoose'

//Permitir que SOLO los campos denifidos en el Schema sean almacenados
//en la BDD
mongoose.set('strictQuery', true)


//CREAR UNA FUNCION LLAMADA CONNECTION ()
const connection = async()=>{
    try {
        //establecer la conexion con la BDD
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
  
        //Presentar la conexion en consola
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        //Capturar Error en la conexion    
        console.log(error);
    }
}
//exportar la funcion
export default  connection