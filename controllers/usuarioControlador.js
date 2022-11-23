import {Router} from "express"
import respuestasHttp from "../utils/respuestasHttp.js"
import usuarioServicio from "../services/usuarioServicio.js"
import { UsuarioCrearReqModel, UsuarioDatosResModel } from "../models/UsuarioModel.js"

const router= Router()

router.post("/", (req,res)=> {

    usuarioServicio.crearUsuario(new UsuarioCrearReqModel(req.body))
    .then( (usuario)=>{
        respuestasHttp.exito(req, res, new UsuarioDatosResModel(usuario), 201)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al crear usuario", 400)
    })
})

router.get("/", (req,res)=> {

    const username= "josefdocas"

    usuarioServicio.leerUsuario(username)
    .then( (usuario)=>{
        respuestasHttp.exito(req, res, new UsuarioDatosResModel(usuario), 201)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al leer el usuario", 400)
    })
})




export default router