const express = require('express')
const path = require('path')
const mongodb = require('mongoose')
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
app.use(express.json());




app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/cartAdd/:nome/:preco', async(req, res) => {
    await Cart.create(req.params).then(()=>{
        console.log('o produto ja foi cadastrado')
    }).catch(()=>{
        console.log('Houve algum problema em cadastrar o produto')
    })
});

app.post('/cart', async (req,res)=>{
    await Cart.find().then((produto)=>{
        res.render('cart', {produto})
    }).catch((err)=>{
        console.log('deu algum erro'+err)
    })
})

app.post('/cartEdit/:nome/:quantidade', async (req,res)=>{
    const nome = req.params.nome
    const quantidade = parseFloat(req.params.quantidade)


    try{
        const produto = await Cart.findOne({nome:nome})
        
        const preco_total = quantidade * produto.preco
        await Cart.updateOne({nome:nome}, {quantidade:quantidade})

        res.status(200).json({newprecoTotal:preco_total})

    }catch(err){
        console.log('lago deu errado')
    }

    
})




app.listen(3000,()=>{
    console.log('http://localhost:3000')
})