function desencriptar(){
    var textoIngreso = document.getElementById("textoIngreso").value;
    var palabraDesencriptada = desencriptarPalabra(textoIngreso);
   



    $('#textoSalida').val(palabraDesencriptada);

   
}


function desencriptarPalabra(entrada){
    
    var txtentrada = entrada;
  
    if (!txtentrada == "") {
      
  
      txtentrada = txtentrada.replaceAll("ai", "a");
      txtentrada = txtentrada.replaceAll("enter", "e");
      txtentrada = txtentrada.replaceAll("imes", "i");
      txtentrada = txtentrada.replaceAll("ober", "o");
      txtentrada = txtentrada.replaceAll("ufat", "u");
  
    }
    return txtentrada;
}









