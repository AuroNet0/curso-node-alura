import { generateKeyPairSync } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

// console.log('Chave Privada:', privateKey);
// console.log('Chave Pública:', publicKey);

import { publicEncrypt, privateDecrypt } from 'crypto';

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from('Mensagem secreta'));
console.log('Dados Criptografados:', dadosCriptografados.toString('hex'));

const dadosDescriptografados = privateDecrypt(privateKey, dadosCriptografados);
console.log('Dados Descriptografados:', dadosDescriptografados.toString());