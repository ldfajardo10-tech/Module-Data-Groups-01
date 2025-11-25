function findMax(elements) {
    const nums = elements.filter(i => typeof i === "number" && !isNaN(i));
    
    if (nums.length === 0) {
        return "-infinity";
    } else {
        return Math.max(...nums);
    }
  
}

module.exports = findMax;
