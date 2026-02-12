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
       // console.log('Usuário ou senha incorretos!');
        return false;
    }
}

const user = new Usuario('Arneto', 'admin123');

//Quebrando a senha por dicionário
const senhasComuns = ['123456', 'senha123', 'admin', 'admin123', 'password'];

senhasComuns.map(senhaTeste => {
    if(user.autentica('Arneto', senhaTeste)){
        console.log(`Senha encontrada: ${senhaTeste}`);
    }
})
