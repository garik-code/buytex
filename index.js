const Buytex = require('./lib/buytex');
const Api = new Buytex()


Api.sendReq('exchangeGlobal/PlatformSpotOrderBookGroupInfo', 'symbol=BUX_USDT&limit=1000')
.then(
  orderBook => {
    let sell = orderBook.sell
    let sum_usdt = 0
    let price = 0.1
    for (let i = 0; i <= sell.length; i++) {
      if (i == sell.length) {
        sum_usdt = parseFloat(sum_usdt) * 0.25
        console.log(`До цены ${price} = ${sum_usdt} USDT`);
      }else if (parseFloat(sell[i][0]) < price) {
        sum_usdt = parseFloat(sum_usdt) + ( parseFloat(sell[i][0]) * parseFloat(sell[i][1]) )
      }
    }
  }
)
