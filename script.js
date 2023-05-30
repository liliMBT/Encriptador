
document.getElementById("botonEncriptar").addEventListener("click");
document.getElementById("botonDesencriptar").addEventListener("click");
document.getElementById("botonCopiar").addEventListener("click");


function encriptar(){
  
  var obtenerInput = document.getElementById("textoEncrip").value;
    
  var textoEncriptado=[];
  
  for(i=0;i<obtenerInput.length;i++){
    
    textoEncriptado=obtenerInput.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

  }

  document.getElementById("textoEncrip").value= textoEncriptado;
  
  var imagen = document.getElementById("muñeco");
  var mensajeImagen = document.getElementById("ningunMensaje");
  var textoImagen = document.getElementById("ingresaTexto");
  var mensaje = document.querySelector(".mensajeEncriptado");

  if (imagen.style.display == "none") {

    imagen.style.display = "block";
    mensajeImagen.style.display = "block";
    textoImagen.style.display = "block";
    mensaje.style.visibility = "hidden";
    

  } else {

    imagen.style.display = "none";
    mensajeImagen.style.display = "none";;
    textoImagen.style.display = "none";
    mensaje.value = textoEncriptado;
    
  }

}


function desencriptar(){

    var inputDes=document.getElementById("textoEncrip").value;
    var textoDesencriptado=[];

    for(i=0;i<inputDes.length;i++){

      textoDesencriptado=inputDes.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

      document.getElementById("textoEncrip").value=textoDesencriptado;
    }

    var imagen = document.getElementById("muñeco");
    var text = document.querySelector(".mensajeEncriptado");
    text.value = textoDesencriptado;

}

function copiar(){

  var copiarTexto=document.getElementById("textoEncrip");
  copiarTexto.select();
  return document.execCommand("copy");
  
}















