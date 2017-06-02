// Check to see if a string has the same amount of 'x's and 'o's. The methodmust return a boolean and be case insentsitive. the string can contain any char
// example input/output

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true //when no 'x' and 'o' is present should return true
// XO("zzoo") => false
var express = require ('express');
var app = express();
const path = require('path');

app.use( express.static( __dirname + ""));

app.get('/', function(require, response){
	response.sendFile(path.join(__dirname, "", 'index.html'));
});

app.listen(3000,
	console.log('server is active at port 3000'));