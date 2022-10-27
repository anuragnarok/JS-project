const outer = (function () {
    var count=0;
    return function inner () {
        count = count +2;
        return count
    }
    // return inner() 
}
) ()

console.log(outer())
console.log(outer())


