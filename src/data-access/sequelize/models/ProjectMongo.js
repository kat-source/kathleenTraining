const mongoose = require('mongoose')

const projectMongo = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdDate: {
      type: Date,
      required: true,
      default: Date.now
    }
    
});


module.exports = mongoose.model('ProjectMongo', projectMongo);