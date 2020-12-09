const crypto = require('crypto')

class sha256 {
  create(key, ts){
    return new Promise(function(resolve, reject) {
      let res = new Buffer(
        crypto.createHmac('SHA256', key.toString()).update(ts.toString()).digest('hex')
      ).toString('binary')
      // let res = crypto.createHmac('SHA256', key.toString()).update(ts.toString()).digest('hex')
      resolve(res)
    });
  }
}

module.exports = sha256
