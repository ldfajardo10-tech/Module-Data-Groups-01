function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("="); //split the first = from the key 
    const value = rest.join("="); //join the value
    queryParams[key] = value;
  } 

  return queryParams;
} 

module.exports = parseQueryString;
