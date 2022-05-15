# Wordley
If you're in a bind [_Wordley_](https://www.npmjs.com/package/wordley) will help you solve Wordle, or any Wordle-like puzzle where the word length isn't necessarily 5 letters.

<img src="https://user-images.githubusercontent.com/45696445/162882437-f4c879f8-7f6b-4d18-8093-d15b58fa4563.gif">
<img src="https://user-images.githubusercontent.com/45696445/162882477-e84f02f3-0d56-49fa-8590-b89b70c754dc.gif">
<img src="https://user-images.githubusercontent.com/45696445/163201657-f0929f8a-90ed-4df3-aa3a-5f3b3bc60427.gif">

_________________________

## API
### wordley(`string`, `string`, `string`, `string`, `string`, `string`)
```js
var wordley = require('wordley');
```
_________________________
&nbsp;
## Notes
[_Wordley_](https://www.npmjs.com/package/wordley) will help you solve Wordle or any Wordle-like puzzle if you're in a bind. It's a variadic function that takes _n_ strings, the first (_n_-1) representing the (_n_-1) respective letters in the word and the _nth_ as a place to discard used words. Make your first guess on Wordle, or other Wordle-like puzzle where the word length isn't necessarily 5 letters, and in [_Wordley_](https://www.npmjs.com/package/wordley) use an uppercase letter in any of positions 1 - (_n_-1) to confirm that letter at that position, or in the case of multiple uppercase entires to indicate that one of those entries is indeed at that position, a lowercase letter or letters in any of positions 1 - (_n_-1) to confirm that letter or letters as being in the word but not at that position, unless the lowercase letter is followed by a question mark in which case that letter is not at that position but it's unknown whether it's in the word or not, and position _n_ as a discard sequence of used words. If a word discarded in position _n_ is lowercase the word and all words containing its comprising letters are removed from options, unless those letters are otherwise mentioned in positions 1 - (_n_-1), and if uppercase only that word and not other words containing its comprising letters will be removed from options. A position with no entry must be signified with an empty string. [_Wordley_](https://www.npmjs.com/package/wordley) has been extended in these ways to help solve many non Wordle-like puzzles, e.g. crosswords and even [clueless crosswords](https://clueless.puzzlebaron.com/play.php), with added functionality for indicating when only a word and not words containing its comprising letters be removed from options, when a position could be one of several letters, by adding more than one capital letter at that position, when a position is known not to be a letter without asserting the letter must exist elsewhere in the word, or when several positions are unknown but known to share the same letter, by tagging those positions with an arbitrary common numeric value. Numeric tags can thus be used to indicate shared letters, or the opposite, to assert that letters are not shared.

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install wordley
```

## License
(MIT)

Copyright (c) 2022 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
