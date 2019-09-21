const mongoose = require('mongoose');

const Property = mongoose.Schema({
    address: String,
    city: String,
    state: String,
    rooms: Number,
    price: Number,
    floorSpace: Number,
    homeType: String,
    extras: Array
})