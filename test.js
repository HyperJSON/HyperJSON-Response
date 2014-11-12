'use strict';
var tv4 = require('tv4');
var fs = require('fs');

var responseSchema = JSON.parse(fs.readFileSync('./response-schema.json', 'utf8'));

// Expected Failure Test

var badResponse = {};
var valid = tv4.validate(badResponse, responseSchema);

if (valid) {
  throw new Error('SHOULD NOT HAVE VALIDATED!')
}


// Expected Success Tests

var goodResponse = {
  status: {
    code: '000',
    message: 'peachy keen'
  },
  body: 'hello world'
};
var valid = tv4.validate(goodResponse, responseSchema);

if (!valid) {
  throw tv4.error;
}


console.log('cool beans!')