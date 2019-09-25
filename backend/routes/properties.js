const express = require('express');
const router = express.Router();
const Property = require('../models/Property'); 




// Get all properties
router.get('/properties', async (req, res) => {
    try{
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.json({ message: err });
    }
});


// Create property
router.post('/new', async (req, res) => {
    const property = new Property({
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        mainImage: req.body.image,
        rooms: req.body.rooms,
        price: req.body.price,
        floorSpace: req.body.floorSpace,
        homeType: req.body.homeType,
        images: req.body.images,
        extras: req.body.extras,
        rent: req.body.rent,
        sale: req.body.sale
    });
    try {
        const savedProperty = await property.save()
        res.json(savedProperty);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a specific property
router.get('/:propertyId', async (req, res) => {
    try {
        const property = await Property.findById(req.params.propertyId)
        res.json(property)
    } catch (err) {
        res.json({ message: "Error" });
    }
});

// Delete a property
router.delete('/:propertyId', async (req, res) => {
    try {
        const removeProperty = await Property.remove({ _id: req.params.propertyId });
        res.json(removeProperty);
    } catch (err) {
        res.json({ message: "Error" });
    }
});

// Update a property
router.patch('/:propertyId', async (req, res) => {
    try {
        const updateProperty = await Property.updateOne({_id: req.params.propertyId}, { $set: {  
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                mainImage: req.body.image,
                rooms: req.body.rooms,
                price: req.body.price,
                floorSpace: req.body.floorSpace,
                homeType: req.body.homeType,
                images: req.body.images,
                extras: req.body.extras,
                rent: req.body.rent,
                sale: req.body.sale 
            }}
            );
        res.json(updateProperty);
    } catch (err) {
        res.json({ message: "Error" });
    }
});

module.exports = router;