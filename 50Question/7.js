// 7.	Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.


function getTypeOf(value) {
    return typeof value;
}


const stringValue = "Hello, World!";
const numberValue = 42;
const booleanValue = true;

console.log(`Type of ${stringValue}: ${getTypeOf(stringValue)}`);
console.log(`Type of ${numberValue}: ${getTypeOf(numberValue)}`);
console.log(`Type of ${booleanValue}: ${getTypeOf(booleanValue)}`);
