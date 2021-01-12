const global = window;

function myFunction() {
    console.log(this === global);   // true
}

myFunction();
