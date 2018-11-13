const express = require('express')
const user = express.Router();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require("../models/User");

user.use(cors());

process.env.SECRET_KEY = 'secret';

user.post('/register', (req, res) => {
    const today = new Date();
    const userData = {
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today,
    }
    res.send('ok')

    // User.findOne({
    //     where: {
    //         email: req.body.email,
    //     }
    // })
    //     .then(user => {
    //         if ('user') {
    //             const hash = bcrypt.hashSync(userData.password, 10)
    //             userData.password = hash
    //             User.create(userData)
    //                 .then(user => {
    //                     let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,
    //                         {
    //                             expiresIn: 1440
    //                         });
    //                     res.json({ token: token })
    //                 })
    //                 .catch(err => {
    //                     res.send('errr:', err)
    //                 })
    //         } else {
    //             res.json({ eror: 'User already exist' })
    //         }
    //     })
    //     .catch(err => {
    //         res.send('error:', err)
    //     })
})
module.exports = user