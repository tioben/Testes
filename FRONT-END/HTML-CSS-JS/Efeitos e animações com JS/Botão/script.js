const checkbox = document.getElementById("input");
const texto = document.getElementById("texto");

checkbox.addEventListener("change", function() {
    if (this.checked) {
        texto.textContent = "ON";
    } else {
        texto.textContent = "OFF";
    }
});