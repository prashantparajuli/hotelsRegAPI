require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = {
    verifyLogin: (req, res, next) => {
        try {
            const token = req.header('Authorization').split(' ')[1];
            if (!token) return res.send({ status: 'fail', error: 'login to continue!' });
            const user = jwt.verify(token, process.env.ACCESS_TOKEN);
            req.user = user;
            next();
        } catch (er) {
            return res.send({ status: 'error', error: 'Access denied!' });
        }
    }
}