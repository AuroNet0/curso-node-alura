import { createHash } from 'crypto';

function criaHash(senha){
    return createHash('MD5').update(senha).digest('hex');
}

console.log(criaHash('meuAniversario'));

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        this.senha = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.senha === criaHash(senha)){
            console.log('Usuário autenticado com sucesso!');
            return true;
        }
        console.log('Usuário ou senha incorretos!');
        return false;
    }
}

const user = new Usuario('Arneto', 'blau');
console.log(user);
user.autentica('Arneto', 'blaU');
