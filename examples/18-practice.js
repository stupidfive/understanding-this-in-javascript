const myObject = {
    myFunction: function(a, b) {
        console.log(a + ' ' + b);
        console.log(this === myObject);
        function inner() {
            console.log(this === myObject); // false
        }
        inner();
    }
}

myObject.myFunction('hello', 'world');
