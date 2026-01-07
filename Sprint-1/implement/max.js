function findMax(elements) {
    const arr = elements.filter(i => typeof i === "number" && !isNaN(i));
    
    if (arr.length === 0) {
        return -Infinity;
    }

    let max = arr[0];

    for (const num of arr) {
        if (num > max) {
            max = num;
        }
    }
    
    return max;
}
module.exports = findMax;
