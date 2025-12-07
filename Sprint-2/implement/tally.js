function tally(arr) {
  
    if (!Array.isArray(arr)) {
      throw new TypeError("Input must be an array");
    }  
    
    const counts = {}; //store the result as an object 

      for (const items of arr) { //for... of loop to count the items 
        if (counts[items]) {
          counts[items] += 1;
        } else {
          counts[items] = 1;
        }
      }  

    return counts;

}

console.log(tally(["a","a","c"]));
console.log(tally(["a", "5", "5"]));
console.log(tally([]));
console.log(tally("hello world"));


module.exports = tally;
