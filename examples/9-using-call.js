let myObject = {
    myFunction: function(a, b) {
        console.log(a + ' ' + b);       // hello world
        console.log(this === myObject);     // false
        console.log(this === myOtherObject);    // true
    }
}

let myOtherObject = {};

myObject.myFunction.call(myOtherObject, 'hello', 'world');
