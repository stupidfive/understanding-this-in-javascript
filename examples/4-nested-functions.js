const myObject = {
    myFunction: function() {
        console.log(this === myObject);     // true

        function innerFunction() {
            console.log(this === window);   // true
        }
        innerFunction();

        setTimeout(function () {
            console.log(this === window);   // true
        }, 0);
    }
};

myObject.myFunction();
