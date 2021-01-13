const myObject = {
    myFunction: function() {
        console.log(this === myObject);     // false
        console.log(this === window);       // true
    }
};

const myFunction = myObject.myFunction;
myFunction();
