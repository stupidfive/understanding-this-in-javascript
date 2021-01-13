const myObject = {
    myFunction: function () {
        console.log(this === myObject);     // true
    }
};

myObject.myFunction();