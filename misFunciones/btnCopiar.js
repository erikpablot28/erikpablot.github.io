function copiar() {
    var salida = document.getElementById("textoSalida");
    var textoIngreso = document.getElementById("textoIngreso");
    if (!(salida.value === "")) {
      alert("Copiado");
      salida.select();
      document.execCommand("copy");
    }
    salida.value = "";
    textoIngreso.value = "";
  }