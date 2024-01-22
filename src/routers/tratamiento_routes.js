import {Router} from 'express'
const router = Router()

router.post('/tratamiento/registro',(req,res)=>res.send("Registrar tratamientos"))
router.get('/tratamiento/:id',(req,res)=>res.send("Detalle del tratamiento"))
router.put('/tratamiento/:id',(req,res)=>res.send("Actualizar tratamiento"))
router.delete('/tratamiento/:id',(req,res)=>res.send("Eliminar tratamiento"))
router.post('/tratamiento/estado/:id',(req,res)=>res.send("Listar tratamientos"))


export default router