import express from 'express'

//CREAR INSTANCIA
const app = express()
const PORT = 8000

//ESPECIFICAR JSON
app.use(express.json());

//ENDPOINTS
app.get("/", (req, res) => {
    //BUSCAR EN LA BASE DE DATOS
    console.log("Buscando en la base de datos...");
    res.status(200).json({message: "Endpoint de obtener funcionamiento"})
})

//ENDPOINT TIPO POST
app.post("/create", (req, res) => {
    const {name, age} = req.body
    if(!name || !age) {
        return res.status(400).json({message: "Faltan datos: nombre o edad"})
    }
    res.status(201).json({message: `El usuario ${name} de ${age} años creado exitosamente`})
})

//ENDPOINT TIPO ACTUALIZADOR
app.put("/update/:id", (req, res) => {
    const {id} = req.params
    const {name, age} = req.body
    if(!name || !age) {
        return res.status(400).json({message: "Faltan datos: nombre o edad"})
    }
    res.status(200).json({message: `El usuario con id ${id} actualizado a nombre ${name} y edad ${age}`})
})

//ENDPOINT TIPO ELIMINADOR
app.delete("/delete/:id", (req, res) => {
    const {id} = req.params
    res.status(200).json({message: `El usuario con id ${id} ha sido eliminado`})
})

//MI PRIMER ENDPOINT
app.get("/test", (req, res) => {
    res.status(200).json({message: "Buenos dias docentes, como estan??"})
})

//CREAR SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})