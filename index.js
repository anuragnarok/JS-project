// add a counter 

var button = document.getElementById("clickme")
var count = 0;

button.onclick = function() {
    count = count + 1 ;
    // button.innerHTML = 'Click me: ' + count; 
    function display() {
        button.innerHTML = 'Click me: ' + count;
        // console.log(count)
    }
    display()
}


var button2 = document.getElementById("zero")
button2.onclick = function() {
    count = 0;
    button.innerHTML = 'Click me: ' + count;
}