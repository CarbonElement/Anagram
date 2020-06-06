// Created by Carbon/Khaled on the 6th of June 2020.
// Last Edited on the 6th of June 2020.

const fs = require('fs');

// Read wordlist from file and convert it into an array of words.
const words =  fs.readFileSync("./wordlist.txt").toString('utf-8').split(" ");
let anagrams = []

const Anagram = (word) => {


// Actual anagram finding
words.forEach(element => {
    element = element.toLowerCase();

    // Split each word in the wordlist into letters to check if the original word contains these letters
    for(let i=0; i<element.split("").length; i++) {
        if(word.split("").includes(element[i])) {

            // If the number of letters in the original word is less than the number of letters in the anagram then it's not an anagram
            if(word.split("").filter(item => item == element[i]).length < element.split("").filter(item => item == element[i]).length) return;

            // When the for statement is done and all letters exist in the original word push it to the anagrams array. Also make sure the anagram isn't in the list twice.
            if(i == element.split("").length - 1) {
                if(anagrams.includes(element)) return;
                anagrams.push(element)
            }
        } else {
            return;
        }
 
  }
})

return anagrams;

}

module.exports = Anagram;
