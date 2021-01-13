# Understanding `this` in JavaScript

## Basic Behavior of `this`

In global scope, `this` references the `window` object in a browser (or the `global` object in node.js).

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

Practice: What is the output of this?

```javascript
const myObject = {
    myFunction: function(a, b) {
        console.log(a + ' ' + b);
        console.log(this === myObject);
    }
}

myObject.myFunction();
```

## Manually Change the Value of `this`

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

## Shorthand

```javascript
const myObject = {
    myFunction() {
        console.log(this === myObject);
    }
}

myObject.myFunction();  // true
const myFunction = myObject.myFunction;
myFunction();   // false
```

## Arrow Function

```javascript
const myFunction = () => {
    console.log(this === window)    // true
};

myFunction();
```

```javascript
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
```

`call`, `apply` or `bind` won't change the behavior of `this`.

```javascript
const myObject = {};

const myFunction = () => {
    console.log(this === myObject);
}

myFunction();       // false
myFunction.call(myObject);  // false
```

## Workaround

Using a temporary variable to capture `this`

```javascript
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
```

Question: Why does this work?

## References

- [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
