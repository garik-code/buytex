require('dotenv').config({path: '.env'})
const request = require('request');
const Signature = require('./lib/signature');
let signature = new Signature()
class Buytex{
  sendReq(name, data){
    return new Promise(function(resolve, reject) {
      signature.create(data, process.env.secret_key)
      .then(
        url => {
          let options = {
            'method': 'GET',
            'url': `https://botapi.buytex.io/${name}?${url}`,
            'headers': {
              'X-MBX-APIKEY': process.env.public_key
            }
          };
          request(options, function (error, response) {
            if (error) reject(error);
            resolve(JSON.parse(response.body));
          });
        }
      )
    });
  }
}
module.exports = Buytex
