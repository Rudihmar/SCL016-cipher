import cipher from "./cipher.js";

const codificar = () => {
  let message = document.getElementById("msgInicio").value;
  let offset = document.getElementById("numberOffset").value;
  let mensaje = cipher.encode(offset, message);
  document.getElementById("msgResultado").value = mensaje;
};

document.getElementById("botonCifrar").onclick = function () {
  codificar();
};

console.log(document.getElementById("botonCifrar"));

const decodificar = () => {
  let messagetwo = document.getElementById("msgInicio").value;
  let offsettwo = document.getElementById("numberOffset").value;
  let mensajedeco = cipher.decode(offsettwo, messagetwo);
  document.getElementById("msgResultado").value = mensajedeco;
};

document.getElementById("botonDescifrar").onclick = function () {
  decodificar();
};
