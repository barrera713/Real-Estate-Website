const express = require('express');
const router = express.Router();
const Property = require('../models/Property'); 

// Get All Properties
router.get('/', async (req, res) => {
    try{
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.json({ message: err });
    }
});


router.get('/about', (req, res) => {
    res.send('about page');
});

// Create Property
router.post('/new', async (req, res) => {
    const property = new Property({
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        image: req.body.image,
        rooms: req.body.rooms,
        price: req.body.price,
        floorSpace: req.body.floorSpace,
        homeType: req.body.homeType,
        extras: req.body.extras
    });
    try {
        const savedProperty = await property.save()
        res.json(savedProperty);
    } catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;