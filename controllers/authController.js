require('dotenv/config');
const bcrypt = require('bcrypt'); //for password hashing
const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = {
    registerUser: async(req, res, next) => {
        console.log(req.body)
        bcrypt.hash(req.body.password, 10).then(async function(hashPass) {
            console.log(hashPass)
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10),
                contact: req.body.contact,
                address: req.body.address,
            })
            await user.save().then(result => {
                    res.send('user registered');
                })
                .catch(err => {
                    res.send(err);
                })
        })

    },
    loginUser: async(req, res) => {
        let getUser;
        User.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                res.json({
                    status: 'error',
                    message: 'invalid email/password'
                })
            }
            // console.log(user);
            getUser = user;
            return bcrypt.compare(req.body.password, user.password)
        }).then(result => {
            // console.log(getUser);
            if (!result) {
                return res.json({
                    status: 'error',
                    message: 'invalid email/password'
                })
            }
            const accessToken = jwt.sign({
                    _id: getUser._id,
                    name: getUser.name,
                },
                process.env.ACCESS_TOKEN, { expiresIn: '10d' });
            res.json({
                status: 'Success',
                message: 'logged in successfully',
                accesstoken: accessToken
            });
        }).catch(err => {
            // console.log(err)
            return res.json({
                status: 'error',
                message: 'invlalid email/pass'
            })
        });

    }
}