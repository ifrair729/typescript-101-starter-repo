// SUPERSET of javascript
// type safety
// make a function called sayHello
// it takes a parameter called name
// return an interpolated string that injects name
function sayHello(name: string): string {
    return `Hello, ${name}!`;
}
// outside of the function, console.log(sayHello(your name));
console.log(sayHello("Levi"));