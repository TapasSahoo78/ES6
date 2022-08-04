// var MongoClient = require('mongodb').MongoClient;  
// var url = "mongodb://127.0.0.1:27017/MongoDatabase";  
// MongoClient.connect(url, function(err, db) {  
//     console.log(db)
// if (err) throw err;  
// console.log("Database created!");  
// db.close();  
// });  


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbase = db.db("mydbs");
    dbase.createCollection("employees", function (err, res) {
        if (err) throw err;
        console.log("Collection is created!");
        db.close();
    });
});

// var MongoClient = require('mongodb').MongoClient; 
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {   //here db is the client obj
//     if (err) throw err;
//     var dbase = db.db("mydbs"); //here
//     dbase.createCollection("customers", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();   //close method has also been moved to client obj
//     });
// });


