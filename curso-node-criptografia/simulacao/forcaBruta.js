import { createHash } from 'crypto';


class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        this.senha = this.criaHash(senha);
    }
    
    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex');
    }

    autentica(nome, senha){
        if(nome === this.nome && this.senha === this.criaHash(senha)){
            console.log('Usuário autenticado com sucesso!');
            return true;
        }
        console.log('Usuário ou senha incorretos!');
        return false;
    }
}

const user = new Usuario('Arneto', '0012');

//Quebrando a senha por força bruta
for(let senhaTeste = 0; senhaTeste < 10000; senhaTeste++){
    if(user.autentica('Arneto', senhaTeste.toString())){
        console.log(`Senha encontrada: ${senhaTeste}`);
        break;
    }
}
