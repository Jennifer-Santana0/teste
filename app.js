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

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/index/cadastro',(req,res)=>{
    Usuario.findOne({email:req.body.email}).then(async(user)=>{
        if (user){
            console.log('ja existe esse email')
            res.render('cadastro')
        }else{
            await Usuario.create(req.body)
            Usuario.findOne({email:req.body.email}).then((user2)=>{
                let id_user = user2._id
                res.render('index',{id_user})
            })
        }
    })
})

app.post('/index/login',async(req,res)=>{
    Usuario.findOne({email:req.body.email}).then((user)=>{
        if (user){
            let id_user = user._id
            res.render('index',{id_user})
        } else {
            console.log('Conta não encontrado');
            res.render('login')
        }
    })
})


app.post('/cart/:produto/:preco/:id_produto', async(req,res)=>{ 
    await Cart.create(req.params)

    Cart.find().then((produtos)=>{
        res.render('cart', {produtos})
    }).catch((err)=>{
        res.render('index')
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})