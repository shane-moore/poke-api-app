// server.js creates a NodeJS server to serve the webpack build

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/public/favicon.png'));
// the __ dirname is the current directory from where the script is running
app.use(express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);