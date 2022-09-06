const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {

res.write(`qqqqqqqqqq`)

res.end();
});


route.get('/:id', (req, res) => {


res.write(`${req.params.id}`)

res.end();
});



module.exports = route;
