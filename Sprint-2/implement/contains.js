function contains(obj, prop) {

    if (typeof obj !== "object" && obj === null ) {
        return false;
    } else if (Array.isArray(obj)) {
        throw new Error ("invalid input"); 
    }

    return prop in obj; 

}
console.log(contains({ a: 1, b: 2 }, "a"));
console.log(contains({ a: 1, b: 2 }, "c"));
console.log(contains({}));
console.log(contains({undefined},"b"));

try {
    console.log(contains([1, 2, 3], "3"));
}  catch (E) {
    console.log(E.message);
}

module.exports = contains;
