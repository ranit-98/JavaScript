//2)”Hello Mr Hy I am good boy” how vowels in this sentence
function countVowels(str) {
    const vowelRegex = /[aeiou]/gi;

    const vowelMatches = str.match(vowelRegex);

    return vowelMatches ? vowelMatches.length : 0;
}

const testString = "Hello Mr Hy I am good boy";
const numberOfVowels = countVowels(testString);

console.log(`The number of vowels in "${testString}" is: ${numberOfVowels}`);