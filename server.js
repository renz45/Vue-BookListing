let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');
let history = require('connect-history-api-fallback');

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(history());

var port = process.env.PORT || 5000;
app.listen(port);

console.log("port " + port);