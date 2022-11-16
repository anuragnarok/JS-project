function outer() {
    let counter = 0;
    function incrementCounter() {
        counter = counter +1;
        return counter
    }
    return incrementCounter;
}
const newFunction = outer();
console.log(newFunction())
console.log(newFunction())