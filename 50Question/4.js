// 4.	Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');

    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
}


const testString = "A man, a plan, a canal, Panama!";
const isPalindromeResult = isPalindrome(testString);

if (isPalindromeResult) {
    console.log(`"${testString}" is a palindrome.`);
} else {
    console.log(`"${testString}" is not a palindrome.`);
}
