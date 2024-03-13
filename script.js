const text = "Hallo Dariia, bist du fleisig?";

document.getElementById("clickButton").addEventListener("click", function() {
  document.getElementById("label").textContent = text;
});
