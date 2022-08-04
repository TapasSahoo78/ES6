var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "elpdev",
    password: "elphill123"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE javatpoint", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });

});  