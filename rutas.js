import partidoControlador from "../cotrollers/partidoControlador.js"
import usuarioControlador from "../cotrollers/usuarioControlador.js"

const rutas= (app)=>{
    app.use("/partido", partidoControlador)
    app.use("/usuario", usuarioControlador)
}

export {rutas}
