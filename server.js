const express = require("express");
const fs = require('fs');
var app = express();



app.set("view engine", "pug");
app.set("views", "./view");
app.use(express.urlencoded({extended:true}))

app.get("/", (req,resp)=>{
    
    resp.render("index",{titulo:"Home"});
});

//habilidades blandas
app.get("/habilidadesBlandas", (req,resp)=>{
    
    resp.render("template1",{titulo:"habilidades Blandas"});
});
//habilidades Profesionales
app.get("/habilidadesProfecionales", (req,resp)=>{
    
    resp.render("template2",{titulo:"Habilidades Profesionales"});
});
//Experiencia
app.get("/experienciaLaboral", (req,resp)=>{
    
    resp.render("template3",{titulo:"Experiencia Laboral"});
});
//Estudios
app.get("/estudios", (req,resp)=>{
    
    resp.render("template4",{titulo:"Estudios"});
});
//formulario
app.get("/form", (req,resp)=>{
    resp.render("template5",{titulo:"Fromulario"});
    
});
//Respusta
app.post("/respuesta",(req,resp)=>{
    let nombre = req.body.nom;
    let apellido = req.body.ap;
    let email = req.body.email;
    const datos = nombre + " " + apellido + " " + email + "\n";
    
    fs.appendFile("texto.txt",datos,(err)=>{
        if(err){
            let adv = "ha sucedido un error!";
            console.log(adv)
            return
        }
    })

    resp.render("response",{
        nombre: nombre,
        apellido: apellido,
        email: email
    })
})

app.listen(4000, ()=>{
    let msg = "port running at 4400"
    console.log(msg)
});