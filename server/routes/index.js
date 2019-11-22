const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

//Models
const User = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.post('/register', (req, res, next) => {
    const {username, password,email,name} = req.body;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            // Store hash in your password DB.
            const user = new User({
                username,
                password: hash,
                email:email,
                name:name
            });
            const promise = user.save();
            promise.then((data) => {
                res.json(data);
            }).catch((err) => {
                res.json(err);
            });
        });
    });

});

router.post('/login', (req, res, next) => {
    const {username, password} = req.body;

    const promise = User.findOne({
        username

    });

    promise.then((user) => {
        if (!user) {
            res.json({
                status: false,
                message: "Not found"
            })
        } else {
            bcrypt.compare(password, user.password).then((result) => {
                if (!result) {
                    res.json({status: false, message: "Wrong password"})
                } else {
                    res.json({status: true,name:user.name,username:user.username})
                }
            });
        }
    });


});

module.exports = router;
