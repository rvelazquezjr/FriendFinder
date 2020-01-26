var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.use(function(err, req, res, next) {
    console.error(err);
    res.status(500).send("DAGNABBIT!");
});



app.listen(PORT, function() {
    console.log("App listening on: " + PORT + "!!!");
});