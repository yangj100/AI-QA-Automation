const reverseString = str =>

// This makes it so that right before the tests are ran, they set it to lowerCase, then split, then reverse, then join.
    str
    .toLowerCase()
    .split('')
    .reverse('')
    .join('');

module.exports = reverseString;