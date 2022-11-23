var array=[]

const crear= ()=>{

    let nombresEquipos= ["Cucuta", "Bogota", "Medellin", "Bucaramanga", "Cali"]

    for(let i=0; i<nombresEquipos.length; i++){

        const equipo={
            id: i+1,
            nombre:nombresEquipos[i]
        }
array.push(equipo)
    }

    console.log(array)
}

const buscarId= (id)=>{

    const equipo= array.find(equipo=> equipo.id == id)


    return equipo ? equipo : null
}

export default {crear, buscarId}