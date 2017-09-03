var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

var PORT = process.env.PORT || 8090;

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride("_method"))
var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_contoller.js");
app.use("/", routes);
app.use("/create", routes);
app.use("/update", routes);
app.use("/delete", routes);

var PORT = 3000;

app.listen(PORT, function(){
    console.log("listening on %s", PORT);
});