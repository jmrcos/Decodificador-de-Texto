const input = document.querySelector(".input");
const output = document.querySelector(".output");
const btnCopy = document.querySelector(".btn-copiar");
btnCopy.style.display = "none";
const textoInformativo = document.querySelector('.container-output-texto');


function criptografar(string){
    const resultado = string
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o','ober')
    .replaceAll('u', 'ufat');

    return resultado

}

function descriptografar(string){
    const resultado = string
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')

    return resultado
}

function btnEncriptar(){

    var caracteresEspeciais = /[!@#$%^&*()_+\-=\[\]{};'çÇ:"\\|,.<>\/?]+/
    var acentos = /[áàãâäéèêëíìîïóòõôöúùûü]/i;
    var letrasMaiusculas = /[A-Z]/;

    if (caracteresEspeciais.test(input.value) || acentos.test(input.value) || letrasMaiusculas.test(input.value)) {
        alert("O texto contém acentos, letras maiúsculas ou caracteres especiais. Não é permitido.");
    }
    else{
        const textoEncriptado = criptografar(input.value);
        output.style.backgroundImage = 'none';
        textoInformativo.style.display='none'
        output.value = textoEncriptado;
        input.value = "";
        output.style.marginTop = '0'
        btnCopy.style.display = 'block'; 
    }
}

function btnDesencriptar(){

    var caracteresEspeciais = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var acentos = /[áàãâäéèêëíìîïóòõôöúùûü]/i;
    var letrasMaiusculas = /[A-Z]/;

    if (caracteresEspeciais.test(input.value)||acentos.test(input.value) || letrasMaiusculas.test(input.value)) {
        alert("O texto contém acentos, letras maiúsculas ou caracteres especiais. Não é permitido.");
    }
    else{
        let textoDesencriptado = descriptografar(input.value);
        output.style.backgroundImage = 'none';
        textoInformativo.style.display='none'
        output.value = textoDesencriptado;
        input.value = ''
        output.style.marginTop = '0'
        btnCopy.style.display = 'block';     
    }
}

function copy() {
    const texto = document.querySelector(".output").value;
    navigator.clipboard.writeText(texto);

    document.querySelector('.btn-copiar').addEventListener('click', copy);

    alert('Texto copiado')
}

