let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

console.log("port" + process.env.PORT);

var port = process.env.PORT || 5000;
app.listen(port);