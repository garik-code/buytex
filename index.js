const request = require('request');
const Signature = require('./lib/signature');

let signature = new Signature()
signature.create('test')
.then(
  sha256 => {
    console.log(sha256);
  }
)
