const Calc = require('./lib/calc');
const Calculator = new Calc()

Calculator.dump(0.01).then(go => console.log(go))
Calculator.pump(0.283).then(go => console.log(go))
