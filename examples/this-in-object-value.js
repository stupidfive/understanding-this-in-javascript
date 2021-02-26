const myObject = {
  myThis: this
};

console.log(myObject.myThis === window);  // true
