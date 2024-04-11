const express = require('express')
const path = require('path')
const mongodb = require('mongoose')
const Cart = require('./models/cart')
const session = require('express-session')
const flash = require('connect-flash')
const app = express()


mongodb.connect('mongodb+srv://root:admin@cluster0.hs8z9ef.mongodb.net/').then(()=>{
    console.log('conectado')
}).catch(()=>{
    console.log('error')
})

app.use(session({
    secret: 'nodejs',
    resave: true,
    saveUninitialized: true
}))
//FLASH
app.use(flash())

//MIDLEWARES
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})


app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(3000,()=>{
    console.log('http://localhost:3000')
})