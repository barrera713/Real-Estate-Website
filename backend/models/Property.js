const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
    address: String,
    city: String,
    state: String,
    image: String,
    rooms: Number,
    price: Number,
    floorSpace: Number,
    homeType: String,
    extras: Array
});

module.exports = mongoose.model('Property', PropertySchema );