# Wordley

_Wordley_ is a lightweight module to help you solve Wordle if you're in a bind.


_________________________
## API
### wordley(`string`, `string`, `string`, `string`, `string`, `string`)
```js
var wordley = require('wordley');
```
&nbsp;
_________________________
&nbsp;
## Notes
_Wordley_ is a lightweight module to help you solve Wordle if you're in a bind. It takes 6 strings at 6 respective positions. If any of strings 1 - 5 have an uppercase letter that letter is at that position, if any have a lowercase letter or letters that letter is or those letters are in the word but excluded from that position, and all letters in position 6 not also in positions 1 - 5 are excluded from the word, hence, position 6 can safely consist of the previous rounds' entire words. A position with no entry must be signified with an empty string.

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install wordley
```

## License
(MIT)

Copyright (c) 2019 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
