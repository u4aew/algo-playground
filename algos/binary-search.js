const {array10000} = require('../assets/test-data')

// Implementation without algorithm
// Lead time 0.22508399933576584
const getElementSimple = (num) => {
    const startTime = performance.now()
    for (let i = 0; i < array10000.length; i++) {
        // console.log(i)
        if (array10000[i] === num) {
             console.log('Lead time', performance.now() - startTime)
             return num
        }
    }
}

console.log(getElementSimple(6952), 'without algorithm')

// Implementation with algorithm
// Lead time 0.006750002503395081
const getElementAlgo = (num) => {
  const startTime = performance.now()
  let low = 0
  let high = array10000.length - 1

  while (low <= high) {
      console.log(low, 'low')
      console.log(high, 'high')
      let mid = Math.floor((high + low) / 2)
      console.log(mid, 'mid')
      let guess = array10000[mid]
      // console.log(guess)
      if (guess === num ) {
          console.log('Lead time', performance.now() - startTime)
          return num
      }
      if (guess > num) {
          high = mid - 1
      } else {
          low = mid + 1
      }
  }

}

console.log(getElementAlgo(6952), 'with algorithm')
