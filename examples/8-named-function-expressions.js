const myFunction = function myOtherFunction(recurse) {
    if (recurse) {
        console.log('mark 1');
        myFunction(false);  // OK
        console.log('mark 2');
        myOtherFunction(false); // OK
    }
}

console.log('mark 3');
myFunction(true);   // OK
console.log('mark 4');
myOtherFunction(true);  // ReferenceError
