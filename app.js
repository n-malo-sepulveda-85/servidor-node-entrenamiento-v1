require("dotenv").config();
const express=require("express");
const app=express();
const hbs=require("hbs");

const puerto=process.env.PORT;

app.set('view engine','hbs');
//Contenido estático
hbs.registerPartials(__dirname + '/views/partial');
app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Desarrollo n',
        titulo:'Entrenamiento NODE'
    });
});

app.get('/saludar', (req, res) => {
    res.send('¡HOLA CHILE!');
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Desarrollo n',
        titulo:'Entrenamiento NODE'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Desarrollo n',
        titulo:'Entrenamiento NODE'
    });
});
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(puerto, () => {
    console.log(`Escuchando el puerto ${puerto}`);
});