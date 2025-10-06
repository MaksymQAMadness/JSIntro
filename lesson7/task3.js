let numberMassive = [15, 3, 4, 7, 12, 4, 6, 23, 73, 25, 35, 25, 15, 6, 7]
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = arr.filter(item => {
        if (seen.has(item)) {
            return true;
        } else {
            seen.add(item);
            return false;
        }
    });
    return [...new Set(duplicates)];
}
let numberEquals = findDuplicates(numberMassive)
console.log(numberEquals)