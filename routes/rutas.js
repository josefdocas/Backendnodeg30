import { Router } from "express"
import partidoControlador from "../controllers/partidoControlador.js"
import usuarioControlador from "../controllers/usuarioControlador.js"

const rutas= (app)=>{  
    app.use("/partido", partidoControlador)
    app.use("/usuario", usuarioControlador)
}

export {rutas}
