import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const message = 'teste encriptação simétrica';
const key = randomBytes(32);
const iv = randomBytes(16);

const cifra = createCipheriv('aes256', key, iv);
const mensagemCifrada = cifra.update(message, 'utf-8', 'hex') + cifra.final('hex');
console.log(mensagemCifrada); 

//Transmissão ---- key, iv, message

const decifra = createDecipheriv('aes256', key, iv);
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');
console.log(mensagemDecifrada);