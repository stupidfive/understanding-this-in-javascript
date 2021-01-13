const myObject = {
    myFunction: function() {
        console.log(this === window);       // true
    }
};

const myFunction = myObject.myFunction;
myFunction();
