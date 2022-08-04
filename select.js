const { appendFile } = require('fs');
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbase = db.db("mydbs");

    dbase.collection('employees').find()
        .toArray((err, results) => {
            if (err) throw err;
            // dbase.collection("employees").findOne({}, function(err, result) {  
            // dbase.collection("employees").find({}).toArray(function (err, result) {
            //dbase.collection("employees").findAll({}, function (err, result) {
            // if (err) throw err;
            // console.log(result);
            console.log(results);
            // db.close();

            results.forEach((value) => {
                console.log(value.name);
            });
        });
});


const serachData = async () => {

}

app.get('/', async () => {

})


app.get('/employees', async () => {

});



app.post('/add-data', async () => {

})