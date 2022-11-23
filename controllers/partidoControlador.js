import {Router} from "express"
import respuestasHttp from "../utils/respuestasHttp.js"
import partidoServicio from "../services/partidoServicio.js"
import { PartidoActualizarReqModel, PartidoCrearReqModel, PartidoDatosResModel } from "../models/PartidoModel.js"

const router= Router()


router.post("/", (req,res)=> {

const username= "josefdocas"

    partidoServicio.crearPartido( new PartidoCrearReqModel(req.body), username)
    .then( partido =>{
        respuestasHttp.exito(req, res, new PartidoDatosResModel(partido), 201)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al crear el partido", 400)
    } )

})

router.get("/", (req, res)=>{

    partidoServicio.leerpartido()
    .then( array=>{

        let losPartido=[]

        array.forEach( partido => {
            losPartido.push( new PartidoDatosResModel(partido))
            
        });

        respuestasHttp.exito(req, res, losPartido, 200)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al leer los partidos", 500)
    })

})

router.get("/:id", (req, res)=>{

    partidoServicio.detallepartido(req.params.id)
    .then( partido=>{

        respuestasHttp.exito(req, res, new PartidoDatosResModel(partido), 200)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al leer el detalle del partido", 500)
    })

})

router.put("/:id", (req, res)=>{

    const username= "josefdocas"

    partidoServicio.actualizarpartido(req.params.id, new PartidoActualizarReqModel(req.body, username))
    .then( partido=>{

        respuestasHttp.exito(req, res, new PartidoDatosResModel(partido), 200)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al actualizar el partido", 500)
    })

})

router.delete("/:id", (req, res)=>{

    const username= "josefdocas"

    partidoServicio.eliminarpartido(req.params.id, username)
    .then( ()=>{

        respuestasHttp.exito(req, res, "Partido eliminado con exito", 200)
    })
    .catch( err=>{
        respuestasHttp.error(req, res, err, "Error al eliminar el partido", 500)
    })

})

export default router

