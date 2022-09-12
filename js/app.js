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

var amount = 5000;
var months = 6;
var rate = 16.9;


slider.oninput = function() {
    output.innerHTML = this.value;
    amount=  parseFloat(output.innerHTML);
}
slider2.oninput = function() {
    output2.innerHTML = this.value;
    months = parseFloat(output2.innerHTML);
}
slider3.oninput = function() {
    output3.innerHTML = this.value;
    rate= parseFloat(output3.innerHTML);
}
function Calculate() {
interest = (amount * (rate * 0.01)) / months;
total = ((amount / months) + interest);
    loanAmount.innerHTML = `${Math.floor(total)} ₼`;
}  