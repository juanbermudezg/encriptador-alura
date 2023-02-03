const textArea = document.querySelector(".mensaje-a-encriptar");
const mensaje = document.querySelector(".mensaje-encriptado");
const copia = document.querySelector(".botonCopiado");
const btnCopy = document.getElementById("btn-copy");

const textareaa = document.getElementById("textareaa");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".mensaje-a-encriptar").value;
    let validador = textoEscrito.match(/^[a-z 0-9]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function encriptar(){
    
    if(!validarTexto()) {
        const textoEncriptado = encriptar1(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar1(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function desencriptar(){
    if(!validarTexto()) {
        const textoEncriptado = desencriptar1(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
   
    
}


function desencriptar1(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

btnCopy.addEventListener("click", async event => {
    try {
      const text = await navigator.clipboard.writeText(textareaa.value);
    } catch (error) {
      console.log(`Ocurrió un error: ${error}`);
    }
    alert("Texto Copiado")
    window.location.reload()
  });
