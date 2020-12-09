const Buytex = require('./lib/buytex');
const Api = new Buytex()

Api.sendReq('wallet/WalletList', '')
.then(
  walletList => {
    console.log(walletList);
  }
)
