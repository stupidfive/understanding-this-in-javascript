const myObject = {};

const myFunction = () => {
    console.log(this === myObject);
}

myFunction();       // false
myFunction.call(myObject);  // false
