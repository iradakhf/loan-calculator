var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
var loanAmount= document.getElementById("loan");
var total =0;
var interest = 0;
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

var amount = output.value;
var months = output2.value;
var rate = output3.value;


slider.oninput = function() {
    output.innerHTML = this.value;
    console.log (output.innerHTML);
    amount=  parseFloat(output.innerHTML);
    console.log (amount);
}
slider2.oninput = function() {
    output2.innerHTML = this.value;
    console.log (output2.innerHTML);
    months = parseFloat(output2.innerHTML);
}
slider3.oninput = function() {
    output3.innerHTML = this.value;
    rate= parseFloat(output3.innerHTML);
}
function Calculate() {
interest = (amount * (rate * 0.01)) / months;
console.log (interest);
total = ((amount / months) + interest);
    loanAmount.innerHTML = total;
}  