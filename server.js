var express = require('express');
var path = require('path');
var app = express();


var port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.use(function(err, req, res, next) {
    console.error(err);
    res.status(500).send('DAGNABBIT!');
});



app.listen(port, () => {
    console.log(`App listening on ${port}`);
});
