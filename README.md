# Understanding `this` in JavaScript

```javascript
console.log(this === window);   // true
```

```javascript
function myFunction() {
    console.log(this === window);   // true
}

myFunction();
```

```javascript
let myObject = {
    myFunction: function () {
        console.log(this === myObject);     // true
    }
};

myObject.myFunction();
```
