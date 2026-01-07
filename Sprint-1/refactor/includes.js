// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {
  
    if (element === target) {
      return true;
    }
  }
  return false; // return false added
}

module.exports = includes;
