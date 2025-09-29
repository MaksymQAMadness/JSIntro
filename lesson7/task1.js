let numberMassive = [15, 4, 6, 7, -15, -3, 5, 0, 35, 0, -5, -17, -7, 0]
let numberNegatives = 0
let numberPositives = 0
let numberZeros = 0
for (const number of numberMassive) {
    if (number == 0) {
        numberZeros++
    } else if (number > 0) {
        numberPositives++
    } else {
        numberNegatives++
    }
}
console.log("Positive numbers: " + numberPositives)
console.log("Negative numbers: " + numberNegatives)
console.log("0 Numbers: " + numberZeros)