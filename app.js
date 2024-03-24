const express = require('express')
const path = require('path')
const mongodb = require('mongoose')
const model = require('./models/User')
const app = express()


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

app.post('/pegou', async(req,res)=>{
    model.findOne({email:req.body.email}).then((user)=>{
        console.log(user)
        res.render('index')
    }).catch((err)=>{
        console.log('erro')
    })
    res.render('pegou')
})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})