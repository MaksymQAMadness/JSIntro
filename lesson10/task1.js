function delayedLog(message, delay) {
    const delayPromise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(message);
        }, delay)
    })
    delayPromise.then(value => console.log(value))
}
delayedLog("Hello world", 2000)