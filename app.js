const express = require('express')
const path = require('path')
const mongodb = require('mongoose')
const Usuario = require('./models/User')
const Cart = require('./models/cart')
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
    res.render('cadastro')
})

app.post('/index',(req,res)=>{
    Usuario.findOne({email:req.body.email}).then((user) => {
        if (user) {
          console.log('Usuário encontrado:', user);
          res.render('cadastro')
        } else {
            console.log('Usuário não encontrado');
            res.render('index')
        }
    }).catch((err) => {
        console.error('Erro durante a busca do usuário:', err);
    })
})

app.get('/cart/:produto/:preco', async(req,res)=>{ 
    await Cart.create(req.params)
    res.render('cart')
})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})