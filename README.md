# Understanding `this` in JavaScript

In global scope, `this` references `window` object (or `global` in node.js).

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

