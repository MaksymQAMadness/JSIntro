function handleNum(num, handleEven, handleOdd) {
    if (num % 2 == 1) {
        handleOdd(num)
    } else {
        handleEven(num)
    }
}

function handleOdd(num) {
    console.log('The number ' + num + ' is odd');
}

function handleEven(num) {
    console.log('The number ' + num + ' is even');
}

handleNum(5, handleEven, handleOdd)
handleNum(6, handleEven, handleOdd)