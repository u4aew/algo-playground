const {array10000} = require('../assets/test-data')

// Implementation without algorithm
// Lead time 0.22508399933576584
const getElementSimple = (num) => {
    const startTime = performance.now()
    let result = null
    for (let i = 0; i < array10000.length; i++) {
        if (array10000[i] === num) {
             result = num
             break
        }
    }
    console.log('Lead time', performance.now() - startTime)
    return result
}

console.log(getNumberSimple(6952))

// Implementation with algorithm
const getElementAlgo = (num) => {

}
