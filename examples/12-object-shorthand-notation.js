const myObject = {
    myFunction() {
        console.log(this === myObject);     // false
    }
}

myObject.myFunction();  // true
const myFunction = myObject.myFunction;
myFunction();   // false
