let myObject = {
    myFunction: function () {
        console.log(this === myObject);     // true
        console.log('mark 1');
    }
};

myObject.myFunction();