function createLookup(codePairs) {

  if (!Array.isArray(codePairs)) {
    return null;
  }

  return Object.fromEntries(codePairs); //convert the code pairs arrays into object

} 

    const countryCurrency = [
     ["US", "USD"],
     ["CA", "CAD"],
   ];

const result = createLookup(countryCurrency);
console.log(result);

module.exports = createLookup;
