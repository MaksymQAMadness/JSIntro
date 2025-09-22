let hour = Math.floor(Math.random() * 24)
console.log("Time currently is " + hour)
if (hour >= 0 && hour <= 5) {
    console.log("Good night!")
} else if (hour <= 11) {
    console.log("Good morning!")
} else if (hour <= 17) {
    console.log("Good day!")
} else {
    console.log("Good evening!")
}