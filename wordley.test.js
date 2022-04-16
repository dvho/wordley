const test = require('./wordley.js')

const invalidInput1 = test('a')
if (invalidInput1 !== 'Your entry is invalid. Make sure you have at least 2 entries in your input.') {
    throw new Error('Wordley is not recognizing inputs with less than two entries')
}

const invalidInput2 = test('a', 'C', 'd', 'E0', 'f', 'ghijkl')
if (invalidInput2 !== 'Your input is not valid at position 4.') {
    throw new Error('Wordley is not recognizing invalid input')
}

const invalidInput3 = test('a9', 'C', 'd', 'E0', 'f', 'ghijkl')
if (invalidInput3 !== 'Your inputs are not valid at positions 1, and 4.') {
    throw new Error('Wordley is not recognizing invalid inputs')
}
