// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 } = { key : 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 } = { key : 2}

// c) What is the target return value when invert is called with {a : 1, b: 2} = { 1 : a, 2 : b}

// c) What does Object.entries return? Why is it needed in this program? = returns an array of key, value pairs. It's important bc we can loop both, key and values.

// d) Explain why the current return value is different from the target output = because invertedObj.key is just setting a property called "key" 
// we need to use the [] to access to the variable.

// e) Fix the implementation of invert (and write tests to prove it's fixed!) 

test("inverts object with numeric strings value", () => {
  expect(invert({ "a": 1, "b": 2 })).toEqual({ 1: "a", 2: "b" });
});

test("inverts object with strings value", () => {
  expect(invert({ "a": "hello", "b": "world" })).toEqual({ "hello": "a", "world": "b" });
});

test("inverts object with numeric strings value and literal strings value", () => {
  expect(invert({ "a": "hello", "b": 5 })).toEqual({ hello: "a", 5 : "b" });
});

