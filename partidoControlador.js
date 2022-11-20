import {Router} from "express"
import respuestasHttp from "../utils/respuestasHttp.js"
import partidoServicio from "../services/partidoServicio.js"

const router= Router()



router.post("/", (req,res)=> {
    //console.log(req.body)
    //console.log(req.query)
    if(req.query.error=="1"){
        respuestasHttp.error(req,res,"No es posible crear Partido", "Error al crear partido", 200)
    }else{
         respuestasHttp.exito (req, res, "Partido creado con exito", 201)
    }
})

export default router

