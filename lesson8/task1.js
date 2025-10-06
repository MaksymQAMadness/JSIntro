const calculator = {
    lastResult: null,
    operationsCount: 0,
    add: function (a, b) {
        this.lastResult = a + b
        this.operationsCount++
        return this.lastResult
    },
    subtract: function (a, b) {
        this.lastResult = a - b
        this.operationsCount++
        return this.lastResult
    },
    multiply: function (a, b) {
        this.lastResult = a * b
        this.operationsCount++
        return this.lastResult
    },
    divide: function (a, b) {
        if (b == 0) {
            console.log("Error, dividing by zero is not permitted")
        } else {
            this.lastResult = a / b
            this.operationsCount++
            return this.lastResult
        }
    },
    reset: function () {
        this.lastResult = null
        this.operationsCount = 0
    }
}

console.log(calculator.add(15, 7))
console.log(calculator.lastResult)
console.log(calculator.subtract(9, 6))
console.log(calculator.lastResult)
console.log(calculator.multiply(3, 5))
console.log(calculator.divide(10, 2))
calculator.divide(10, 0)
console.log(calculator.lastResult)
console.log(calculator.operationsCount)
calculator.reset()
console.log(calculator.lastResult)
console.log(calculator.operationsCount)