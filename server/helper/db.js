const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://denizAkpinar:abcd1234@cluster0-myv8m.mongodb.net/test?retryWrites=true&w=majority');

    mongoose.connection.on('open', () => {
        console.log("Database connected");
    });

    mongoose.connection.on('err', (err) => {
        console.log(err);
    });
    mongoose.Promise = global.Promise;

};
