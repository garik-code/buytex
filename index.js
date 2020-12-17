const Calc = require('./lib/calc')
const Calculator = new Calc()

Calculator.dump(0.0156).then(go => console.log(go))
Calculator.pump(0.016).then(go => console.log(go))
