const express = require('express');
const app = express();
const dbConnect = require('./db/config');

dbConnect();

app.use(function (req, res, next) {
    next()
});

app.listen(3000);
