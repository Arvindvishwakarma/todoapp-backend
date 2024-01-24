const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    task: {
        type: String
    },
    desc: {
        type: String
    },
    isComplete: {
        type: String
    },
    createDateTime:{
        type:String
    }
})

module.exports = mongoose.model('Todo', todoSchema)