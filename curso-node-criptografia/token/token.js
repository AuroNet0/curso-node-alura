import jwt from "jsonwebtoken";

const chaveSecreta = "BLAU";
const token = jwt.sign({ apelido: "Auro", curso: "node" }, chaveSecreta);
console.log('token:', token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);
console.log('token decodificado:', tokenDecodificado);