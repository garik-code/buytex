const Calc = require('./lib/calc')
const Calculator = new Calc()

Calculator.dump(0.0156).then(go => console.log(go))
