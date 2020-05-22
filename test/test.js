var request = require('supertest');
var app = require('../app_oauth.js');
describe('GET /test', function() {
 it('respond with redirecting to login', function(done) {
 //navigate to root and check the the response is "Found. Redirecting to login.html"
 request(app).get('/').expect('Found. Redirecting to login.html', done);
 });
});