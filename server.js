// DEPENDENCIAS
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// SERVIDOR LEVANTADO
app.listen(port, () => 
console.log(`Servidor Express en el puerto: ${port}!`)
)

app.use(express.static('public'))
//DECLARACIÓN DE MOTOR DE PLANTILLAS EJS
app.set('view engine', 'ejs')
//DECLARACIÓN DE RUTA Y VISTA
app.get('/', (req,res)=>{
    res.render('index')
})