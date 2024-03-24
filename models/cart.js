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
    email_produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: 'nao definido'
    },
})

module.exports = mongoose.model('cart',Cart)