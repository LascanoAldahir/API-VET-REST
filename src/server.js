//importar Express
//A diferencia del anterior aqui trabajamos 
//con ES MODULE
//YA NO CON COMMON JS
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';

import routerPacientes from './routers/paciente_routes.js'

//Podemos usar otro nombre de ruta gracias al default  de abajo
import routerVeterinarios from './routers/veterinario_routes.js'

//Crear ina instancia de express
// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())
// Variables globales

// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})

app.use('/api',routerVeterinarios)
app.use('/api',routerPacientes)
// Exportar la instancia de express por medio de app


// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

export default app