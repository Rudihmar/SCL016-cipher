import cipher from './cipher.js';

const codificar = () => {
    let message = document.getElementById("msgInicio").value;
    let offset = document.getElementById("numberOffset").value;
    let mensaje = cipher.encode(offset, message);
    document.getElementById("msgResultado").value = mensaje; 
}

document.getElementById("botoncifrar").onclick = function() {
    codificar();
}

const decodificar = () => {
    let messagetwo = document.getElementById("msgInicio").value;
    let offsettwo = document.getElementById("numberOffset").value;
    let mensajedeco = cipher.decode(offsettwo, messagetwo);
    document.getElementById("msgResultado").value = mensajedeco;
    
}

document.getElementById("botondescifrar").onclick = function() {
    decodificar();
}

console.log(cipher);
