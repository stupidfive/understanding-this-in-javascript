let myObject = {
    myFunction: function() {
        console.log(this === myObject);     // true
        setTimeout(function () {
            console.log(this === myObject); // false
            console.log(this === window);   // true
        }, 0);
    }
};

myObject.myFunction();
