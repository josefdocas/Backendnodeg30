import partidoRepositorio from "../db/repositorios/partidoRepositorio.js"
import usuarioRepositorio from "../db/repositorios/usuarioRepositorio.js"
import equipoRepositorio from "../db/repositorios/equipoRepositorio.js"
import crypto from "crypto"

const crearPartido= (partido, username)=>{

   return new Promise( (resolver,rechazar )=>{

    if(!partido.fecha || !partido.equipoLocal || !partido.equipoVisitante){
        rechazar("Datos vacios")
    }

    const usuarioEntity= usuarioRepositorio.buscarUsername(username)
    const equipoEntityLocal= equipoRepositorio.buscarId(partido.equipoLocal)
    const equipoEntityVisitante= equipoRepositorio.buscarId(partido.equipoVisitante)

    partido.idpartido= crypto.randomUUID()
    partido.golesLocal= "0"
    partido.golesVisitante= "0"
    partido.usuarioEntity= usuarioEntity
    partido.equipoEntityLocal= equipoEntityLocal
    partido.equipoEntityVisitante= equipoEntityVisitante

    partidoRepositorio.crear(partido)

    resolver(partidoRepositorio.detalle(partido.idpartido))
   }) 
}

const leerpartido= ()=>{

    return new Promise( (resolver,rechazar)=>{
        resolver(partidoRepositorio.leer())
    })
}

const detallepartido= (idPartido)=>{

    return new Promise( (resolver,rechazar)=>{
        resolver(partidoRepositorio.detalle(idPartido))
    })
}

const actualizarPartido= (idPartido, partido, username)=>{

    return new Promise( (resolver,rechazar )=>{
 
     if(!partido.golesLocal || !partido.golesVisitante){
         rechazar("Datos vacios")
     }
    
     const partidoDetalle= partidoRepositorio.detalle(idPartido)
     const usuarioEntity= usuarioRepositorio.buscarUsername(username)

     if(partidoDetalle.usuarioEntity.idUsuario != usuarioEntity.idUsuario){
        rechazar ("No se puede actualizar el partido")
     }    
     
     partidoDetalle.golesLocal= partido.golesLocal
     partidoDetalle.golesVisitante= partido.golesVisitante

 
     resolver(partidoRepositorio.actualizar(partidoDetalle))

    
    })
}

const eliminarPartido= (idPartido, username)=>{

    return new Promise( (resolver,rechazar )=>{
 
     if(!partido.golesLocal || !partido.golesVisitante){
         rechazar("Datos vacios")
     }
    
     const partidoDetalle= partidoRepositorio.detalle(idPartido)
     const usuarioEntity= usuarioRepositorio.buscarUsername(username)

     if(partidoDetalle.usuarioEntity.idUsuario != usuarioEntity.idUsuario){
        rechazar ("No se puede actualizar el partido")
     }    
     
 
     resolver(partidoRepositorio.actualizar(partidoDetalle.idPartido))

    
})
}
export default {crearPartido, leerpartido, detallepartido, actualizarPartido, eliminarPartido}