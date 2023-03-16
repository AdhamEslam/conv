let dollar = document.getElementById("dolar");
let pound = document.getElementById("pound");

dollar.onkeyup = function() {
    pound.value = dollar.value * 30.90;
}

pound.onkeyup = function() {
    dollar.value = pound.value / 30.90;
}