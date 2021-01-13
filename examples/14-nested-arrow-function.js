const myObject = {
    myFunction: function() {
        console.log(this === myObject);     // true

        const innerArrow = () => {
            console.log(this === myObject); // true
        };
        innerArrow();

        setTimeout(() => {
            console.log(this === myObject); // true
        }, 0);
    }
};

myObject.myFunction();
