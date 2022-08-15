function cambiarInfo(){
    var textoIngreso = document.getElementById("textoIngreso").value;
    var error = "Su palabra no se pemite";
    var palabraEncriptada;
    for(var i =0; i < textoIngreso.length; i++){

        if(textoIngreso.charAt(i) >= 'a' && textoIngreso.charAt(i) <= 'z' ){
           palabraEncriptada =  encriptarPalabra(textoIngreso);
           $('#textoSalida').val(palabraEncriptada);

    }else{
        $('#textoSalida').val(error);
    }

}



    

}

function encriptarPalabra(palabra){
    var palabraEncriptada = "";

    

    for(var i =0; i < palabra.length; i++){
        if(determinarVocal(palabra.charAt(i))){
            palabraEncriptada += convertirVocal(palabra.charAt(i));

        }else{
            palabraEncriptada+= palabra.charAt(i);
        }
    }
    return palabraEncriptada;



}

function determinarVocal(letra){
    var resultado = false;
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ){
        resultado = true;
    }
    return resultado;
    

}

function convertirVocal(letra){
    var letraConvertda = "";
    switch(letra){
        case 'a':
            letraConvertda = "ai";
            break;

        case 'e':
            letraConvertda = "enter";
            break;

        case 'i':
            letraConvertda = "imes";
            break;

        case 'o':
            letraConvertda = "ober";
            break;

        case 'u':
            letraConvertda = "ufat";
            break;

    }
    return letraConvertda;

}
