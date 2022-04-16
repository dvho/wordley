let englishWords = require('./englishWords')

module.exports = (...args) => { //Wordley is a variadic function. Arguments are n strings at n-1 respective positions as long as n >= 2. If any of strings 1 - (n-1) have an uppercase letter that letter is at that position, if any have a lowercase letter or letters that letter is or those letters are in the word but excluded from that position, and all letters in position n not also in positions 1 - (n-1) are excluded from the word, hence, position n can safely consist of the previous rounds' entire words and is used as such to subtract the letters as well as full words from the output. A position with no entry must be signified with an empty string.

    if (args.length < 2) {
        return ('Your entry is invalid. Make sure you have at least 2 entries in your input.')
    }

    let badInputsArray = []
    const alphabeticCharactersOnly = /\b[a-zA-Z]+\b/  //Matches all words that don't contain digits nor special characters
    args.forEach((i, index) => {
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


    const wordLength = args.length - 1
    let options = englishWords.filter(i => i.length === wordLength)
    const usedWords = args[wordLength].match(new RegExp('.{1,' + wordLength + '}', 'g')) //Splits the string sequentually into an array of strings which are (n-1) in length

    const removeFromOptions = usedWords ? usedWords : [] //Initialize this with usedWords

    const upperCase = /[A-Z]/ //Matches uppercase letters
    const lowerCase = /[a-z]/ //Matches lowercase letters

    options.forEach(i => {
        if (args[wordLength] !== '') {
            args[wordLength].split('').forEach(j => {
                if (i.includes(j) && !args.slice(0, wordLength).join('').toLowerCase().includes(j)) {
                    removeFromOptions.push(i)
                }
            })
        }

        args.forEach((j, index) => {
            if (j !== '' && index < wordLength) {
                j.split('').forEach(k => {
                    if (upperCase.test(k) && i.split('')[index] !== k.toLowerCase()) {
                        removeFromOptions.push(i)
                    }
                    if (lowerCase.test(k)) {
                        if (!i.includes(k) || i.split('')[index] === k) {
                            removeFromOptions.push(i)
                        }
                    }
                })
            }
        })
    })

    options = options.filter(i => !removeFromOptions.includes(i))

    return options

}
