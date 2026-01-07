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


module.exports = tally;
