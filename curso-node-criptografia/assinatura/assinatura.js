import { generateKeyPairSync, createSign, createVerify } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

let dados = "Mensagem para assinatura digital";

const assinador = createSign("rsa-sha256");
assinador.update(dados);
const assinatura = assinador.sign(privateKey, "hex");
console.log("Assinatura Digital:", assinatura);

// alterando os dados para simular uma tentativa de fraude
//dados += "Mensagem para assinatura digital alterada";
// Transmissão ---- dados, assinatura, publicKey
const verificador = createVerify("rsa-sha256");
verificador.update(dados);
const assinaturaValida = verificador.verify(publicKey, assinatura, "hex");
console.log("Assinatura Válida:", assinaturaValida);
