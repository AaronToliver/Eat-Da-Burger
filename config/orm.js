var connection = require("../config/connection.js");

connection.connect(function(err){
    if(err) {
        console.log("Error", err.stack);
    }
    console.log("Connected as id: %s", connection.threadID)
});

var orm = {
    addBurger: function(burger, cb) {
        var burgerName = burger;
        var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
        connection.query(mySQLQuery, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    eatBurger: function(burgerId, cb) {
        var id = burgerId;
        connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [id], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    showBurgers: function(tableName, cb) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            //console.log(result[0].burger_name);
            cb(result);
        })
    }
};

module.exports = orm;