'use strict';

var restify = require('restify');

// init the test client
var client = restify.createClient({
    version: '*',
    url: 'http://127.0.0.1:8080'
});


exports['metatests'] = {
    setUp: function (done) {
        require('../lib/sm_metadata.js').startServer();
        done();
    },
    'ping': function (test) {
        client.get('/ping', function (err, req) {
            test.ifError(err);

            req.on('result', function(err,res) {
                test.ifError(err);
                test.equal(res.statusCode,200,"Should return 200 OK");
                test.done();
            });


        });
    }
};

