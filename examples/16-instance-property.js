class MyClass {
    constructor(props) {
        this.myProperty = 10;
        console.log(this instanceof myInstance);
    }
}

const myInstance = new MyClass();
console.log(myInstance.myProperty);     // 10
