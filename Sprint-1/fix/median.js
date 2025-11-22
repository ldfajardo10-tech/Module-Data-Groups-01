// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {

  if (!Array.isArray(list)) {
    return null;
  }

  const nums = list.filter(v => typeof v === "number" && !isNaN(v));

  if (nums.length === 0) {
    return null;
  }

  const sorted = [...nums].sort((a, b) => a - b);
 
  const len = sorted.length;
  const mid = Math.floor(len / 2);


  if (len % 2 === 1) {
    return sorted[mid];
  }

  return (sorted[mid - 1] + sorted[mid]) / 2;
}




module.exports = calculateMedian;
