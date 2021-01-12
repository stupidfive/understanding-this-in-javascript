let myObject = {
    myFunction() {
        console.log(this === myObject);     // false
    }
}

myObject.myFunction();  // true
let myFunction = myObject.myFunction;
myFunction();   // false
