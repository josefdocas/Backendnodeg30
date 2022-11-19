import express, {Router} from "express"
import respuestasHttp from "./utils/respuestasHttp.js"

var app= express()
const router= Router()

const PORT= "3000"
const HOST= "localhost"


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

router.get("/", (req,res)=> {
    // console.log(req.headers)
    //res.header({
   //    "custom-heatder": "mi-header"
   // })
    respuestasHttp.exito (req, res, "Partidos creados")
})


router.post("/", (req,res)=> {
    //console.log(req.body)
    //console.log(req.query)
    if(req.query.error=="1"){
        respuestasHttp.error(req,res,"No es posible crear Partido", "Error al crear partido", 200)
    }else{
         respuestasHttp.exito (req, res, "Partido creado con exito", 201)
    }
})

app.listen(PORT, HOST, ()=>{
    console.log(`Escuchando por el http://${HOST}:${PORT}`)
})