const myFunction = () => {
    console.log(this === window)    // true
};

myFunction();
