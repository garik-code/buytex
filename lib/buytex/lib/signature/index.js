const crypto = require('crypto')
class sha256 {
  create(url, secret_key){
    return new Promise(function(resolve, reject) {
      let ts = Date.now()
      url = `${url}ts=${ts}`
      let signature = new Buffer(
        crypto.createHmac('SHA256', secret_key).update(url).digest('hex')
      ).toString('binary')
      url = `${url}&signature=${signature}`
      resolve(url)
    });
  }
}
module.exports = sha256
