const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
    address: String,
    city: String,
    state: String,
    mainImage: String,
    rooms: Number,
    price: Number,
    floorSpace: Number,
    homeType: String,
    images: Array,
    extras: Array
});

module.exports = mongoose.model('Property', PropertySchema );