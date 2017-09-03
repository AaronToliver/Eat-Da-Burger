var express = require("express");
var router = express.Router();
var query = require("../models/burger.js");

router.get("/", function (req, res){
    query.show(function(data){
        //console.log(data);
        var dataOne = {
            burgerData: data
        }
        //res.render("index", {data : data});
        res.render("index", dataOne);
    });
});

router.post("/create", function (req, res){
    query.add(req.body.item, function(data){
        res.redirect("/");
    });
});

router.post("/update", function(req, res){
    query.eat(req.body.id, function(result){
        res.redirect("/");
    });
});

module.exports = routes;