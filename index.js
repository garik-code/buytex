const Buytex = require('./lib/buytex');
const Api = new Buytex()

const go = (price) => {
  return new Promise((resolve, reject) => {
    Api.sendReq('exchangeGlobal/PlatformSpotOrderBookGroupInfo', 'symbol=BUX_USDT&limit=1000')
    .then(
      orderBook => {
        let sell = orderBook.sell
        let sum_usdt = 0
        for (let i = 0; i <= sell.length; i++) {
          if (i == sell.length) {
            sum_usdt = parseFloat(sum_usdt) * 0.25
            resolve(`${price} USDT = ${sum_usdt} USDT`);
          }else if (parseFloat(sell[i][0]) < price) {
            sum_usdt = parseFloat(sum_usdt) + ( parseFloat(sell[i][0]) * parseFloat(sell[i][1]) )
          }
        }
      },
      err => reject(err)
    )
  });
}

go(0.269500).then(go => console.log(go))
go(0.117787).then(go => console.log(go))
go(0.082053).then(go => console.log(go))
go(0.070171).then(go => console.log(go))
go(0.068686).then(go => console.log(go))
