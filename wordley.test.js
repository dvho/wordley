const test = require('./wordley.js')


const invalidInput = test('a', 'C', 'd', 'E0', 'f', 'ghijkl')
if (invalidInput !== 'Your input is not valid at position 4.') {
    throw new Error('Wordley is not recognizing invalid input')
}

const invalidInputs = test('a9', 'C', 'd', 'E0', 'f', 'ghijkl')
if (invalidInputs !== 'Your inputs are not valid at positions 1, and 4.') {
    throw new Error('Wordley is not recognizing invalid inputs')
}
