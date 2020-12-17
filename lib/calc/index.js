const Buytex = require('../buytex');
const Api = new Buytex()

class Calc {
  dump (price) {
    return new Promise((resolve, reject) => {
      Api.sendReq('exchangeGlobal/PlatformSpotOrderBookGroupInfo', 'symbol=BUX_USDT&limit=1000')
      .then(
        orderBook => {
          let buy = orderBook.buy
          let sum_token = 0
          let sum_usdt = 0
          for (var i = 0; i <= buy.length; i++) {
            buy[i]
            if (i == buy.length) {
              resolve({
                type: 'dump',
                token: sum_token,
                usdt: sum_usdt
              })
            }else if (parseFloat(buy[i][0]) > price) {
              sum_usdt = parseFloat(sum_usdt) + ( parseFloat(buy[i][0]) * parseFloat(buy[i][1]) )
              sum_token = parseFloat(sum_token) + parseFloat(buy[i][1])
            }
          }
        },
        err => reject(err)
      )
    });
  }
  pump (price) {
    return new Promise((resolve, reject) => {
      Api.sendReq('exchangeGlobal/PlatformSpotOrderBookGroupInfo', 'symbol=BUX_USDT&limit=1000')
      .then(
        orderBook => {
          let sell = orderBook.sell
          let sum_token = 0
          let sum_usdt = 0
          for (let i = 0; i <= sell.length; i++) {
            if (i == sell.length) {
              resolve({
                type: 'pump',
                token: sum_token,
                usdt: sum_usdt
              })
            }else if (parseFloat(sell[i][0]) < price) {
              sum_usdt = parseFloat(sum_usdt) + ( parseFloat(sell[i][0]) * parseFloat(sell[i][1]) )
              sum_token = parseFloat(sum_token) + parseFloat(sell[i][1])
            }
          }
        },
        err => reject(err)
      )
    });
  }
}

module.exports = Calc
