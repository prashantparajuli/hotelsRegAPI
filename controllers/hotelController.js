const { Hotel } = require('../models');
module.exports = {
    registerHotel: async(req, res) => {
        console.log(req.body)
        const hotel = new Hotel({
            name: req.body.name,
            owner: req.body.owner,
            address: req.body.address,
            contact_details: req.body.contact_details,
        })
        await hotel.save().then(result => {
                res.json({
                    message: 'hotel registered',
                    detail: hotel
                });
            })
            .catch(err => {
                res.send(err);
            })
    },
    getHotels: async(req, res) => {
        Hotel.find().select('name owner address registered_date contact_details -_id')
            .then((hotels, error) => {
                if (error) {
                    res.json({
                        status: 'fail',
                        message: 'couldnot fetch hotels'
                    })
                }
                res.json({
                    status: 'success',
                    message: hotels
                })
            });
    }
}