// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Class'
// Expected Output : 'Development'

function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

const testString = "Web Development Class";
const longWord = longestWord(testString);

console.log(`The longest word is: "${longWord}"`);
