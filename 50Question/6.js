// 6.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function countVowels(str) {
    // Define a regular expression to match vowels (case-insensitive)
    const vowelRegex = /[aeiou]/gi;

    // Use the match method to find all matches of vowels in the string
    const vowelMatches = str.match(vowelRegex);

    // Return the count of vowel matches (or 0 if there are no matches)
    return vowelMatches ? vowelMatches.length : 0;
}

const testString = "The quick brown fox";
const numberOfVowels = countVowels(testString);

console.log(`The number of vowels in "${testString}" is: ${numberOfVowels}`);
