const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    registered_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    owner: {
        type: String,
        minlength: 4,
    },
    address: {
        type: String,
        required: true,
    },
    contact_details: {
        phone: {
            type: String,
            minlength: 10,
            maxlength: 10,

        },
        email: {
            type: String,
            minlength: 5
        },
    }
});
const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;