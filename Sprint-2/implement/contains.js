function contains(obj, prop) {

    if (typeof obj !== "object" && obj === null ) { //typeof to check if the key is an object
        return false;
    } else if (Array.isArray(obj)) { //array.isarray to check that the obj is an array, so we throw an error message
        throw new Error ("invalid input"); 
    }

    return prop in obj; //in method to check if a property is in the object

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
