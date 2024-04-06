const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema({
    nome: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    quantidade: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('cart',Cart)