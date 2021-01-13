const myObject = {
    myFunction: function() {
        const self = this;
        console.log(self === myObject);     // true

        function innerFunction() {
            console.log(self === myObject); // true
        }
        innerFunction();

        setTimeout(function () {
            console.log(self === myObject); // true
        }, 0);
    }
};

myObject.myFunction();