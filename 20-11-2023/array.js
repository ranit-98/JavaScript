let arr1=[1,2,3,4];
console.log("Original array: "+arr1)
// push-- add elements after last position
arr1.push(5,6);
console.log("Array after PUSH operation: "+arr1);

//pop-- delete element from last position
let x=arr1.pop();
console.log("Array after POP operation: "+arr1);
console.log("Popped element: "+x);

// shift-delete element from first position
let y=arr1.shift()
console.log("Shifted element: "+y);
console.log("Array after Shift operation: "+arr1);

// unshift- add element from first position
arr1.unshift(7,8);
console.log("Array after unshift operation: "+arr1);

// REST operator
function hello(...a){
    a.pop();
    console.log("POP operation using rest parameter: "+a);
}
hello(1,2,3,4,5,6,7,8);


//slice------------------------------------------------------------------
let a=[1,2,3,4,5,6,7,8]
let b=a.slice(0,4) // slice(starting index no, ending place no) {index no start from 0 while place no start from 1}
let w=a.slice(4,8)
console.log(b)
console.log(w)

let arr3=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let slice1=arr3.slice(0,4);
let slice2=arr3.slice(4,8);
let slice3=arr3.slice(8,11);
let slice4=arr3.slice(11,14);
let slice5=arr3.slice(14,17);
let slice6=arr3.slice(17,20);
console.log(slice1);
console.log(slice2);
console.log(slice3);
console.log(slice4);
console.log(slice5);
console.log(slice6);

//splice-------------------------
let arr4=[1,2,3,4,5,6,7,8,9,10];
console.log(arr4);
let splice1=arr4.splice(5,1);
console.log("After splicing the element "+splice1+": "+arr4);

let splice2=arr4.splice(6,0,"Hello");
console.log("Inserting 'Hello' at the place no 7: "+arr4);

let splice3=arr4.splice(0,4);
console.log("After splicing the element "+splice3+": "+arr4);
