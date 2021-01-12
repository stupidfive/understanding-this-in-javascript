let myObject = {
    myFunction: function() {
        console.log(this === myObject);     // true
        setTimeout(() => {
            console.log(this === myObject); // true
            console.log(this === window);   // false
        }, 0);
    }
};

myObject.myFunction();
