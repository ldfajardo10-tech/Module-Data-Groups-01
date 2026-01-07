function createLookup(codePairs) {

  if (!Array.isArray(codePairs)) {
    return null;
  }

  return Object.fromEntries(codePairs); //convert the code pairs arrays into object

} 

    
module.exports = createLookup;
