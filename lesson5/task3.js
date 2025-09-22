function generatePassword(length){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random()*characters.length))

    }
    return result;
}

console.log(generatePassword(5));
console.log(generatePassword(10));