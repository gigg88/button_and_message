const text = "Hallo Dariia, bist du fleisig?";

document.getElementById("clickButton").addEventListener("click", function() {
  document.getElementById("label").textContent = text;
});

const text1 = "Schick mir doch eine Nachricht zurück;)";

document.getElementById("clickButton1").addEventListener("click", function() {
  document.getElementById("label1").textContent = text1;
});
