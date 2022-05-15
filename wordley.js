let englishWords = require('./englishWords')

const nonAlphanumericCharactersAndQuestionMarksOnly = /[^a-zA-Z0-9?]/ //Matches all entries that contain anything other than alphanumeric characters and question marks
const upperCase = /[A-Z]/ //Matches uppercase letters
const lowerCase = /[a-z]/ //Matches lowercase letters
const digits = /[0-9]/ //Matches all numeric characters

module.exports = (...args) => { //Wordley is a variadic function. Arguments are n strings at n-1 respective positions as long as n >= 2. If any of strings 1 - (n-1) have an uppercase letter or letters that letter is or at least one of those letters are at that at that position, if any have a lowercase letter or letters that letter is or those letters are in the word but excluded from that position unless the lowercase letter is followed by a question mark in which case that letter is excluded from that position but it is unknown whether that letter is excluded from the word, and all letters in position n not also in positions 1 - (n-1) are excluded from the word, hence, position n can safely consist of the previous rounds' entire words and is used as such to subtract the letters as well as full words from the output. A position with no entry must be signified with an empty string. Wordley can also help to solve many non Wordle-like puzzles, e.g. crosswords and even clueless crosswords like those at https://clueless.puzzlebaron.com/play.php, with added functionality for indicating when a position could be one of several letters, by adding more than one capital letter at that position, or when several positions are unknown but known to share the same letter, by tagging those positions with an arbitrary, common numeric value. Numeric tags can be used to indicate shared letters or to assert that letters are not shared.

    if (args.length < 2) {
        return ('Your entry is invalid. Make sure you have at least 2 entries in your input.')
    }

    let badInputsArray = []

    args.forEach((i, index) => {
        if (i !== '') {
            const iArray = i.split('')
            if (i.includes('?')) {
                if (iArray.length < 2) {
                    badInputsArray.push(index)
                } else if (iArray[0] === '?') {
                    badInputsArray.push(index)
                } else if (digits.test(iArray[iArray.indexOf('?') - 1]) || upperCase.test(iArray[iArray.indexOf('?') - 1])) {
                    badInputsArray.push(index)
                } else if (index === args.length - 1) {
                    badInputsArray.push(index)
                }
            } else if (nonAlphanumericCharactersAndQuestionMarksOnly.test(i)) {
                badInputsArray.push(index)
            }
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


    const sameLetterTags = []
    if (digits.test(args.join(''))) { //If positions have been tagged with numbers build an array of objects containing two key-value pairs - An index indicating the position in the word and a tag indicating the as yet unknown letter.
        args.forEach((i, index) => {
            if (i.match(digits)) {
                sameLetterTags.push({index, tag: i.split('').filter(j => digits.test(j)).join('')})
            }
        })
    }

    const wordLength = args.length - 1
    let options = englishWords.filter(i => i.length === wordLength)
    const usedWords = args[wordLength].match(new RegExp('.{1,' + wordLength + '}', 'g')) //Splits the string sequentually into an array of strings which are (n-1) in length
    const removeFromOptions = usedWords ? usedWords.map(i => i.toLowerCase()) : [] //Initialize this with usedWords, which must be done because even though all words containing letters in the last position not also in previous positions are removed from options there's still the possibility that all letters in a used word could also be in the puzzle's answer and in such a case a user would be shown this word without explicitly removing usedWords. Moreover, force all usedWords to lowercase in the event a user entered the used word in uppercase in order to specify that only that word and not its comprising letters be removed from options

    options.forEach(i => {
        let letterArray = i.split('')
        if (args[wordLength] !== '') { //If there are letters in the last position that are not also in the preceding positions subract all words containing those letters from the options.
            args[wordLength].split('').forEach(j => {
                if (i.includes(j) && !args.slice(0, wordLength).join('').toLowerCase().includes(j)) {
                    removeFromOptions.push(i)
                }
            })
        }

        args.forEach((j, index) => {
            if (j !== '' && index < wordLength) { //For each of the positions that are not the last position...

                const upperCaseEntires = j.split('').filter(k => upperCase.test(k)).map(m => m.toLowerCase())
                const lowerCaseEntries = j.split('').filter(k => lowerCase.test(k) || k === '?')

                if (upperCaseEntires.length > 0 && !upperCaseEntires.includes(letterArray[index])) { //...if there's at least one uppercase letter and a word doesn't have the uppercase letter at the indicated position, or in the case that more than one uppercase letter is entered, contain at least one of the uppercase letters at the indicated position, remove that word from options...
                    removeFromOptions.push(i)
                }

                lowerCaseEntries.forEach(k => { //...if there's at least one lowercase letter not followed by a question mark and the word either doesn't have that letter or has that letter but at the indicated position, remove that word from options, unless the letter is followed by a question mark in which case the word doesn't have that letter at that position but it's unknown whether or not the letter is elsewhere in the word so only remove that word from options when it has the letter at the indicated position
                    if (lowerCaseEntries.length > 0 && k !== '?') {
                        if (lowerCaseEntries[lowerCaseEntries.indexOf(k) + 1] !== '?') {
                            if (!i.includes(k) || letterArray[index] === k) {
                                removeFromOptions.push(i)
                            }
                        } else {
                            if (letterArray[index] === k) {
                                removeFromOptions.push(i)
                            }
                        }
                    }
                })
            }
        })

        sameLetterTags.forEach(j => { //For each tag...
            sameLetterTags.forEach(k => { //...look at the other tags and...
                if (j.tag === k.tag) { //...if the tags match indicating a pattern if that pattern isn't present in the word remove the word from options
                    if (letterArray[j.index] !== letterArray[k.index]) {
                        removeFromOptions.push(i)
                    }
                } else { //...else if the tags don't match but there's a pattern in the word at the positions of the indicated tags remove the word from options.
                    if (letterArray[j.index] === letterArray[k.index]) {
                        removeFromOptions.push(i)
                    }
                }
            })
        })
    })

    options = options.filter(i => !removeFromOptions.includes(i)) //Remove all words the solution can't be based on the indicating inputs...

    return options //...and return an array of remaining available options.

}
