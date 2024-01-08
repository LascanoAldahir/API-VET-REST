//Importar la variable app
import app from './server.js'

//Inmportar la funcion connection()
import connection from './database.js';
//Haciendo uso de la funcion connection()
connection()

//Iniciar el servidor en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})