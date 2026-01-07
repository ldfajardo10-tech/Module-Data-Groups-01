const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/

test("returns empty object when passed an empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("returns null when passed a non-array input", () => {
  expect(createLookup("hello")).toBeNull();
  expect(createLookup({})).toBeNull();
  expect(createLookup(123)).toBeNull();
});

test("creates a lookup object from an array of code pairs", () => {
  const countryCurrency = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["MX", "MXN"],
  ];

  const expected = {
    US: "USD",
    CA: "CAD",
    MX: "MXN",
  };

  expect(createLookup(countryCurrency)).toEqual(expected);
});