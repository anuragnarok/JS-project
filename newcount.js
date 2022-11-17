function outer() {
    let counter = 0;
    function incrementCounter() {
        counter = counter +1;
        return counter
        // When we do not return the counter, the output is always undefned.
    }
    return incrementCounter;
}
const newFunction = outer();
console.log(newFunction())
console.log(newFunction())
const anotherFunction = outer();
console.log(anotherFunction())
console.log(anotherFunction())