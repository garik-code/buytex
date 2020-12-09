const Buytex = require('./lib/buytex');
const Api = new Buytex()

Api.sendReq('exchangeGlobal/PlatformSpotOrderBookList', 'symbol=BUX_USDT&orderID=0&limit=1000&sort=DESC&')
.then(
  walletList => {
    console.log(walletList);
  }
)
