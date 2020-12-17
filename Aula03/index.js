console.log('Hello World!')

var client = 'João Hugo'

console.log(`Cliente: ${client}`)

var valProduct = 100
var valDiscount = 37

import discountFunc from './modules/calDiscount'

var finalValue = discountFunc(valProduct, valDiscount)

console.log(`Valor final: R$ ${finalValue}`)