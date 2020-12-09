const request = require('request');
const Signature = require('./lib/signature');

let public_key = 'iXqVGhIwrC7SXy0wVGI6l7JqEvrhiM6MLAB8ASDYXg0WZuXTSNvm1RIXJgSznI4i'
let secret_key = 'K3vHWEcQYQ8Oj0FHLaSzS6qvTunz3BV35W9FhMZn1SasmXw1k1q8lleuOKM8hrbw'
let ts = Date.now()
let signature = new Signature()
signature.create(secret_key, ts)
.then(
  sha256 => {
    let options = {
      'method': 'GET',
      'url': `https://botapi.buytex.io/wallet/WalletList?ts=${ts}&signature=${sha256}`,
      'headers': {
        'X-MBX-APIKEY': public_key
      }
    };
    console.log(options);
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
  }
)
