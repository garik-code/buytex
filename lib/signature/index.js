const crypto = require('crypto');
const hash = crypto.createHash('sha256');

class sha256 {
  create(key){
    return new Promise(function(resolve, reject) {
      hash.on('readable', () => {
        const data = hash.read();
        if (data) {
          resolve(data.toString('hex'));
        }
      });
      hash.write(key);
      hash.end();
    });
  }
}

module.exports = sha256
