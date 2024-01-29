//Importar mongose
import mongoose from 'mongoose'

//Permite que solo los campos en el schema sean almacenadas
//en la BDD
mongoose.set('strictQuery', true)



//Crear una funcion llamada connection()
const connection = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error);
    }
}


//Exportar la funcion
export default  connection