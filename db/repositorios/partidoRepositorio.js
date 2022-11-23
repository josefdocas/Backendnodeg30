var array=[]

const crear= (partido)=>{
    array.push(partido)
}

const leer=()=>{
    return array

}

const detalle= (idPartido)=>{
    const partido= array.find(partido=> partido.idPartido == idPartido)

    return partido ? partido : {}

}

const actualizar= (partidoDetalle)=>{
    const index= array.findIndex(partido=> partido.idPartido == partidoDetalle.idPartido)

    if(index != -1){

        array[index]= partidoDetalle

        return array[index]
    } else{
        return {}
    }
}

const eliminar= (idpartido)=>{
    const index= array.findIndex(partido=> partido.idPartido == idPartido)

    if(index != -1){

        array[index]= partidoDetalle

        array.splice(index, 1)
    }
}

const misPartidos= (idUsuario)=>{

    const partidos= array.filter(partido=> partido.usuarioEntity.idUsuario == idUsuario)

    return partidos ? partidos : []
}

export default {crear, leer, detalle, actualizar, eliminar, misPartidos}