const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

let cache = {};

const app = express();

app.use(morgan('dev'));    

app.get('/', (req, res) => {
    if(!cache[req.url]) {
       axios.get('http://www.omdbapi.com' + req.url + '&apikey=8730e0e')
       .then(response =>  {
           cache[req.url] = response.data;
           res.send(response.data);
        //    console.log(JSON.stringify(cache))
       })
       .catch(error => res.send(error.message)); 
    } else {
        res.send(cache[req.url]);
        // console.log(JSON.stringify(cache))
    }
   });

module.exports = app;