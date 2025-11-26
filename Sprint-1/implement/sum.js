function sum(elements) {   
    const numbers = elements.filter((i) => typeof i === "number" && !isNaN(i));

        if (numbers.length === 0) {
          return 0;
        }

    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum([10, 30, 45]));
console.log(sum([10]));
console.log(sum([-10, -30, -45]));
console.log(sum([]));
console.log(sum([10.5, 30, 45]));
console.log(sum([NaN, null, 45, 10]));
console.log(sum([NaN, null, "hello"]));

module.exports = sum;
