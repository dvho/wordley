const test = require('./wordley.js')

const invalidInput1 = test('a')
if (invalidInput1 !== 'Your entry is invalid. Make sure you have at least 2 entries in your input.') {
    throw new Error('Wordley is not recognizing inputs with less than two entries')
}

const invalidInput2 = test('a', 'C', 'd', 'a*', 'f', 'ghijkl')
if (invalidInput2 !== 'Your input is not valid at position 4.') {
    throw new Error('Wordley is not recognizing invalid input')
}

const invalidInput3 = test('?42', 'C', '42d%', 'dz1?', 'E?', '', 'p?')
if (invalidInput3 !== 'Your inputs are not valid at positions 1, 3, 4, 5, and 7.') {
    throw new Error('Wordley is not recognizing invalid inputs')
}

const invalidInput4 = test('','2?','','?tm2','mt3','wt3*m','','o','dfsTREASURE')
if (invalidInput4 !== 'Your inputs are not valid at positions 2, 4, and 6.') {
    throw new Error('Wordley is not recognizing invalid inputs')
}

const invalidInput5 = test('?','a','35','35','fopORANGE?')
if (invalidInput5 !== 'Your inputs are not valid at positions 1, and 5.') {
    throw new Error('Wordley is not recognizing invalid inputs')
}
