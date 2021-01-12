let myObject = {
    myFunction: function() {
        console.log(this === myObject);     // false
        console.log(this === window);       // true
    }
};

let myFunction = myObject.myFunction;
myFunction();
