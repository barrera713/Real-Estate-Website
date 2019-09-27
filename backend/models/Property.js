const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
    address: String,
    city: String,
    state: String,
    photo: String,
    rooms: Number,
    price: Number,
    floorSpace: Number,
    homeType: String,
    images: Array,
    extras: Array,
    rent: Boolean,
    sale: Boolean
});

module.exports = mongoose.model('Property', PropertySchema );