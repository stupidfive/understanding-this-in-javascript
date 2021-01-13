const myObject = {
    myFunction() {
        console.log(this === myObject);
    }
}

myObject.myFunction();  // true
const myFunction = myObject.myFunction;
myFunction();   // false
