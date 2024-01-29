import {Router} from 'express'
import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";

import verificarAutenticacion from "../middlewares/autenticacion.js";
import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';


const router = Router()

verificarAutenticacion
router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)
router.get('/tratamiento/:id',verificarAutenticacion,detalleTratamiento)
router.put('/tratamiento/:id',verificarAutenticacion,actualizarTratamiento)
router.delete('/tratamiento/:id',verificarAutenticacion,eliminarTratamiento)
router.post('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)



export default router
