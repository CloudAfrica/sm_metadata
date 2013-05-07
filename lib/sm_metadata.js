/*
 * sm_metadata
 * https://github.com/CloudAfrica/sm_metadata
 *
 * Copyright (c) 2013 Len Weincier
 * Licensed under the Apache, 1.0 licenses.
 */

'use strict';


/**
 * Module dependencies.
 */

var restify = require('restify');

var app = restify.createServer();

app.get('/ping', function(req,res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("pong");
    res.end();
});


exports.startServer = function() {
    app.listen(8080);
};
