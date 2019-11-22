const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,

    },
    email: {
        type: String
    },
    name: {
        type: String
    }


});

module.exports = mongoose.model('user', UserSchema);