import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'

const verificarAutenticacion = async (req,res,next)=>{

if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    
    const {authorization} = req.headers
    //capturar errores
    try {
        const {id,rol} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        //Verificar el rol
        if (rol==="veterinario"){
            //obtener usuario
            req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
            next()
        }
    } catch (error) {
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}

export default verificarAutenticacion