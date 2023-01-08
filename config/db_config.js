require('dotenv/config');

const mongoose = require('mongoose');
const dbURL = process.env.DB_URL || "mongodb://localhost/hotel_DB";
mongoose.set("strictQuery", false);

const dbConnect = mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('database connected successfully');
}).catch((err) => {
    console.log(`${err} error connectiong to database`);
})

module.exports = dbConnect;