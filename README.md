# Anagram
A script to get all words that can be found in another word by rearranging the letters and etc. For example it can find "yeah" and "hey" in the word yeheah (not a real word but just for example).
# Usage
## Wordlist
You need to find a list of words or a dictionary word list with words seperated by a space (" "). You need the wordlist for the script to find all the words in the dictionary that can be made out of the original word. It can be any language. The wordlist needs to be named wordlist.txt and and needs to be in the same directory as the script.
## Example
```javascript
const Anagram = require('./anagram.js')
const words = Anagram('Yeah');

// Prints out all "anagrams" of the word 'Yeah'.
console.log(words)
console.log("Number of words: " + words.length);
```
