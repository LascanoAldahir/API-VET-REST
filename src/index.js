//iMPORAT LA VARIABLE APP
import app from './server.js'

//Importando la funcion con la BDD
import connection from './database.js';

//llamando la funcion connection()
connection()


app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})

