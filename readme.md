# Wordley
_Wordley_ is a lightweight module to help you solve Wordle if you're in a bind.

<img src="https://user-images.githubusercontent.com/45696445/162882437-f4c879f8-7f6b-4d18-8093-d15b58fa4563.gif">
<img src="https://user-images.githubusercontent.com/45696445/162882477-e84f02f3-0d56-49fa-8590-b89b70c754dc.gif">

_________________________

## API
### wordley(`string`, `string`, `string`, `string`, `string`, `string`)
```js
var wordley = require('wordley');
```
_________________________
&nbsp;
## Notes
_Wordley_ is a lightweight module to help you solve Wordle if you're in a bind. It takes 6 strings, the first 5 representing the 5 respective letters in the word and the last as a place to discard used words. Make your first guess on Wordle and then in Wordley use an uppercase letter in any of positions 1 - 5 to confirm that letter at that position, a lowercase letter in any of positions 1 - 5 to confirm that letter in the word but not at that position, and position 6 as a discard sequence of used words. A position with no entry must be signified with an empty string.

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
