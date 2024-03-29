const express = require('express')
const app = express()



app.set('view engine', 'ejs')
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));




app.get('/index',(req,res)=>{
    let id_user = 123
    res.render('index2',{id_user})
})

app.get('/index/:id_user/cart',(req,res)=>{
    let id_user = req.params.id_user
    res.render('cart2',{id_user})
})








// app.get('/',(req,res)=>{
//     res.render('index2',{id_user:'ola mundo'})
// })

// app.get('/cart/:var',(req,res)=>{
//     const id_user = req.params.var; 
//     res.render('cart2', { id_user }); 
// })

{/* <a href="/index?user=<%= user %>">Voltar para Index</a> */}

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})