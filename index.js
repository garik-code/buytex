const Buytex = require('./lib/buytex');
const Api = new Buytex()

Api.sendReq('exchangeGlobal/PlatformSpotOrderBookList', 'symbol=BUX_USDT&orderID=0&limit=1000&sort=DESC')
.then(
  walletList => {
    // console.log(walletList);
    for (let i = 0; i < walletList.length; i++) {
      if (walletList[i].side == 'SELL') { // BUY
        console.log(`price: ${walletList[i].price}`);
        console.log(`quantity: ${walletList[i].quantity}`);
        console.log(`side: ${walletList[i].side}`);
        console.log('----');
      }
    }
  }
)
