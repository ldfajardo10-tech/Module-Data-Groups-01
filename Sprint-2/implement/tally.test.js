const tally = require("./tally.js");

/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a', 'a', 'a']), target output: { a: 3 }
 * tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("return an object containing the count for each unique item", () => {
    const arr = ["a", "a", "b", "c"];
    const expected = { a: 2, b: 1, c: 1 };
    expect(tally(arr)).toEqual(expected);
});
// Given an empty array
// When passed to tally
// Then it should return an empty object
test("should return an empty object for an empty array input", () => {
    expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("should return an object with the counts of each unique item for an input with duplicates", () => {
    const dup = ["a", "a", "c"];
    const expected = {a:2, c:1};
    expect(tally(dup)).toEqual(expected);
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("throw an error given a valid input like a string", () => {
    expect(() => tally("hello")).toThrow("Input must be an array");
});