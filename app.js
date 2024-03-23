const express = require('express')
const path = require('path')
const app = express()

const mongodb = require('mongoose')

mongodb.connect('mongodb+srv://root:admin@cluster0.hs8z9ef.mongodb.net/').then(()=>{
    console.log('conectado')
}).catch(()=>{
    console.log('error')
})



app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/cadastro',(req,res)=>{
    res.render('cadastro')
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})