const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema({
    produto: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    id_produto: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('cart',Cart)