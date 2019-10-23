const express = require('express');
const morgan = require('morgan');
const axios = require('axios');


const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;