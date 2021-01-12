const global = window;

let myObject = {
    myFunction: function() {
        console.log(this === myObject);     // false
        console.log(this === global);       // true
    }
};

let myFunction = myObject.myFunction;
myFunction();
