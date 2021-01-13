# Understanding `this` in JavaScript

In global scope, `this` references the `window` object in a browser, or the `global` object in node.js.

```javascript
console.log(this === window);   // true
```

In a global scope function, `this` is still the `window` object.

```javascript
function myFunction() {
    console.log(this === window);   // true
}

myFunction();
```

In an object, `this` references the object.

```javascript
let myObject = {
    myFunction: function () {
        console.log(this === myObject);     // true
    }
};

myObject.myFunction();
```

However, if we alias the function, the `this` points to the `window` again. Not cool.

```javascript
const myObject = {
    myFunction: function() {
        console.log(this === window);       // true
    }
};

const myFunction = myObject.myFunction;
myFunction();
```

The same issue occurs when `this` is a nested function.

```javascript
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
```

## Editing `this`

Using `call`

```javascript
const myObject = {
    myFunction: function(a, b) {
        console.log(a + ' ' + b);       // hello world
        console.log(this === myObject);     // false
        console.log(this === myOtherObject);    // true
    }
}

const myOtherObject = {};

myObject.myFunction.call(myOtherObject, 'hello', 'world');
```

Using `apply`

```javascript
const myObject = {
    myFunction: function(a, b) {
        console.log(a + ' ' + b);       // hello world
        console.log(this === myObject);     // false
        console.log(this === myOtherObject);    // true
    }
}

const myOtherObject = {};

myObject.myFunction.apply(myOtherObject, ['hello', 'world']);
```

Using `bind`

```javascript
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
```

