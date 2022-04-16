# Wordley
If you're in a bind _Wordley_ will help you solve Wordle, or any Wordle-like puzzle where the word length isn't necessarily 5 letters.

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
_Wordley_ will help you solve Wordle or any Wordle-like puzzle if you're in a bind. It's a variadic function that takes _n_ strings, the first (_n_-1) representing the (_n_-1) respective letters in the word and the _nth_ as a place to discard used words. Make your first guess on Wordle, or other Wordle-like puzzle where the word length isn't necessarily 5 letters, and then in _Wordley_ use an uppercase letter in any of positions 1 - (_n_-1) to confirm that letter at that position, a lowercase letter in any of positions 1 - (_n_-1) to confirm that letter in the word but not at that position, and position _n_ as a discard sequence of used words. A position with no entry must be signified with an empty string.

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
