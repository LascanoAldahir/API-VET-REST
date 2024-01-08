//importar el modelo 
import Veterinario from "../models/Veterinario.js"


const login =(req,res)=>{
    res.status(200).json({res:'login del veterinario'})
}
const perfil=(req,res)=>{
    res.status(200).json({res:'perfil del veterinario'})
}
//Metodo de registrar nuevo veterinairo
const registro =async (req,res)=>{
    //Desestructurar los campos
    const {email,password} = req.body
    //Validar todos los campos llenos
    //includes verifica si algun campo esta vacio
    //el error 400 es del cliente
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    //Obtener el usuario a la BDD en base al email 
    const verificarEmailBDD = await Veterinario.findOne({email})
    //validar que el email sea nuevo
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    //Crear la instancia del nuevo veterinario
    const nuevoVeterinario = new Veterinario(req.body)
    //Encriptar el password
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
    //Crear el token -> mail
    nuevoVeterinario.crearToken()
    //Guardar en BDD
    await nuevoVeterinario.save()
    //Responder 
    //El codigo 200 es cuando el recurso ha sido creado satisfactoriamente
    res.status(200).json({nuevoVeterinario})
}

//mETODO PARA CONFIRMAR EMAIL DE REGISTRO
const confirmEmail = (req,res)=>{
    res.status(200).json({res:'confirmar email de registro de veterinario'})
}
const listarVeterinarios = (req,res)=>{
    res.status(200).json({res:'lista de veterinarios registrados'})
}
const detalleVeterinario = (req,res)=>{
    res.status(200).json({res:'detalle de un eterinario registrado'})
}
const actualizarPerfil = (req,res)=>{
    res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}
const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
const recuperarPassword= (req,res)=>{
    res.status(200).json({res:'enviar mail recuperación'})
}
const comprobarTokenPasword= (req,res)=>{
    res.status(200).json({res:'verificar token mail'})
}
const nuevoPassword= (req,res)=>{
    res.status(200).json({res:'crear nuevo password'})
}

export {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword
}