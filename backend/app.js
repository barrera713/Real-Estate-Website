require ('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Import Routes
const homeRoute = require('./routes/home');
app.use('/', homeRoute);

// Connect DB
mongoose.connect(process.env.CONNECT_DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log('MongoDB connected...'))
.catch(err => console.log(err))


app.listen(3000) 