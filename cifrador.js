const button = document.querySelector("button");
const procesando = document.querySelector("#procesando");

function procesar() {
  var texto = document.getElementById("texto").value;
  var accion = document.querySelector('input[name="accion"]:checked').value;
  var resultado = "";

  if (accion === "cifrar") {
    resultado = cifrarTexto(texto);
  } else {
    resultado = descifrarTexto(texto);
  }

  document.getElementById("resultado").value = resultado;
}

function cifrarTexto(texto) {
  var textoCifrado = texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return textoCifrado;
}

function descifrarTexto(texto) {
  var textoDescifrado = texto
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ai/g, "a");

  return textoDescifrado;
}

function limpiar() {
  document.getElementById("texto").value = "";
  document.getElementById("resultado").value = "";
}

function copiar() {
  var elemento = document.getElementById("resultado");
  elemento.select();
  document.execCommand("copy");
}

button.addEventListener("click", () => {
  // Mostrar el círculo de "procesando"
  procesando.style.display = "block";
  // Esperar 3 segundos antes de ocultarlo
  setTimeout(() => {
    procesando.style.display = "none";
  }, 3000);
});
