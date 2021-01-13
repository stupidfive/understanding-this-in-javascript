const myObject = {
    myFunction: function(a, b) {
        console.log(a + ' ' + b);       // hello world
        console.log(this === myObject);     // false
        console.log(this === myOtherObject);    // true
    }
}

const myOtherObject = {};

const myFunction = myObject.myFunction.bind(myOtherObject);
myFunction('hello', 'world');
