const add = function () {
  let counter = 0;
  return function inner () {
    counter += 1;
    return counter;
  }
}

console.log(add());
console.log(add());
console.log(add());
