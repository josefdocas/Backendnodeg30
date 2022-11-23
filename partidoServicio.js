import partidoRepositorio from "../db/repositorios/partidoRepositorio.js"

const crearPartido= (partido)=>{

   return new Promise( (resolver,rechazar )=>{

    if(!partido.fecha || !partido.equipoLocal || !partido.equipoVisitante){
        rechazar("Datos vacios")
    }

    partidoRepositorio.crear(partido)

    resolver(partido)
   }) 
}

const leerpartido= ()=>{

    return new Promise( (resolver,rechazar)=>{
        resolver(partidoRepositorio.leer())
    })
}

export default {crearPartido, leerpartido}