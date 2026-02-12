const mensagemSecreta = "zumba";

console.log("Mensagem original:", mensagemSecreta);

function cifraMensagem (mensagem, movimentos){
    const mensagemCifrada = mensagem.split("").map(letra => {
        const codigoLetra = letra.charCodeAt(0);
        const codigoLetraCifrada = codigoLetra + movimentos;
        return String.fromCharCode(codigoLetraCifrada)
    })
    

    return mensagemCifrada.join("");
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, 4);
console.log("Mensagem cifrada:", mensagemCifrada);

function decifraMensagem (mensagem, movimentos){
    const mensagemCifrada = mensagem.split("").map(letra => {
        const codigoLetra = letra.charCodeAt(0);
        const codigoLetraCifrada = codigoLetra - movimentos;
        return String.fromCharCode(codigoLetraCifrada)
    })

    return mensagemCifrada.join("");
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 4);
console.log("Mensagem decifrada:", mensagemDecifrada);

// Explicação do charcodeAt e fromCharCode
// Todo caractere tem um código numérico que o representa
// O charCodeAt retorna esse código numérico a partir do caractere
// O fromCharCode retorna o caractere a partir do código numérico
console.log("Código char da letra 'a':", "a".charCodeAt(0));
console.log("Caractere do código 97:", String.fromCharCode(97));


//Funções de cifra retornando após final do alfabeto
function cifrar(offset, mensagem) {
  let resultado = "";
  for (let i = 0; i < mensagem.length; i++) {
    let codLetraAscii = mensagem.charCodeAt(i);
    if (codLetraAscii >= 65 && codLetraAscii <= 90) {
      let calculoOffset = ((codLetraAscii - 65 + offset) % 26) + 65;
      resultado += String.fromCharCode(calculoOffset);
    } else if (codLetraAscii >= 97 && codLetraAscii <= 122) { 
      let calculoOffset = ((codLetraAscii - 97 + offset) % 26) + 97;
      resultado += String.fromCharCode(calculoOffset);
    } else {
      resultado += String.fromCharCode(codLetraAscii); 
    }
  }
  return resultado;
}

function decifrar(offset, mensagem) {
  let resultado = "";
  for (let i = 0; i < mensagem.length; i++) {
    let codLetraAscii = mensagem.charCodeAt(i);
    if (codLetraAscii >= 65 && codLetraAscii <= 90) {
      let calculoOffset = ((codLetraAscii - 90 - offset) % 26) + 90;
      resultado += String.fromCharCode(calculoOffset);
    } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
      let calculoOffset = ((codLetraAscii - 122 - offset) % 26) + 122;
      resultado += String.fromCharCode(calculoOffset);
    } else {
      resultado += String.fromCharCode(codLetraAscii);
    }

  }
  return resultado;
}
