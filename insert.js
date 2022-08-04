var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbase = db.db("mydbs");
    //dbase.createCollection("employees", function (err, res) {
    //var myobj = { name: "Tapas Sahoo", age: "25", address: "Kolkata" };

    var myobj = [
        { name: "Mahesh Sharma", age: "25", address: "Ghaziabad" },
        { name: "Tom Moody", age: "31", address: "CA" },
        { name: "Zahira Wasim", age: "19", address: "Islamabad" },
        { name: "Juck Ross", age: "45", address: "London" }
    ];

    dbase.collection("employees").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("multiple record inserted");
        db.close();
    });
});  


