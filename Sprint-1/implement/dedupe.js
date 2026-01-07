function dedupe(arr) {
    return [...new Set (arr)];
}
console.log(dedupe([1, 2, 3]));
console.log(dedupe([1, 1, 2, 3, 2, 3, 3]));
console.log(dedupe([]));
console.log(dedupe(["hello", undefined, 5, 5, "hello"]));

module.exports = dedupe;