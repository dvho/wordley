const englishWords = require('./englishWords')

module.exports = (position1, position2, position3, position4, position5, position6) => { //Argument is 6 strings at 6 respective positions. If any of strings 1 - 5 have an uppercase letter that letter is at that position, if any have a lowercase letter or letters that letter is or those letters are in the word but excluded from that position, and all letters in position 6 not also in positions 1 - 5 are excluded from the word, hence, position 6 can safely consist of the previous rounds' entire words. A position with no entry must be signified with an empty string.

    const entry = [position1, position2, position3, position4, position5, position6]

    const alphabeticCharactersOnly = /\b[a-zA-Z]+\b/  //Matches all words that don't contain digits nor special characters
    const upperCase = /[A-Z]/ //Matches uppercase letters
    const lowerCase = /[a-z]/ //Matches lowercase letters

    if (entry.length !== 6) {
        return ('Your entry is invalid. Make sure you have 6 positions properly input.')
    }

    let badInputsArray = []
    entry.forEach((i, index) => {
        if (!alphabeticCharactersOnly.test(i) && i !== '') {
            badInputsArray.push(index)
        }
    })
    badInputsArray = badInputsArray.map((i, index) => {
        if (badInputsArray.length === 1) {
            return `${i + 1}`
        }
        if (index < badInputsArray.length - 1) {
            return `${i + 1}, `
        } else {
            return `and ${i + 1}`
        }
    })

    if (badInputsArray.length > 0) {
        const string = badInputsArray.length > 1 ? `Your inputs are not valid at positions ${badInputsArray.join('')}.` : `Your input is not valid at position ${badInputsArray[0]}.`
        return string
    }

    let wordleyOptions = englishWords.filter(i => i.length === 5)

    const removeFromWordleyOptions = []

    wordleyOptions.forEach(i => {
        if (entry[5] !== '') {
            entry[5].split('').forEach(j => {
                if (i.includes(j) && !entry.slice(0, 5).join('').toLowerCase().includes(j)) {
                    removeFromWordleyOptions.push(i)
                }
            })
        }

        entry.forEach((j, index) => {
            if (j !== '' && index < 5) {
                j.split('').forEach(k => {
                    if (upperCase.test(k) && i.split('')[index] !== k.toLowerCase()) {
                        removeFromWordleyOptions.push(i)
                    }
                    if (lowerCase.test(k)) {
                        if (!i.includes(k) || i.split('')[index] === k) {
                            removeFromWordleyOptions.push(i)
                        }
                    }
                })
            }
        })
    })

    wordleyOptions = wordleyOptions.filter(i => !removeFromWordleyOptions.includes(i))

    return wordleyOptions

}
