const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema =  new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: false,
        default: 0
    },
    endDate: {
        type: Date,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // Foreign
    username: String,
    state: Number,



});

module.exports = mongoose.model('note',NoteSchema);