var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var con = require(__dirname + '/controller');

app.use(bodyParser.json());

var baseURL = '/api/books';
app.post(baseURL, con.create);
app.get(baseURL, con.read);
app.put(`${baseURL}/:id`, con.update);
app.delete(`${baseURL}/:id`, con.delete);


app.listen(3004, function() {
    console.log('listening');
});