import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha) {
  const sal = randomBytes(16).toString("hex");
  const hash = scryptSync(senha, sal, 64).toString("hex");
  return `${sal}:${hash}`;
}


class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':');
    }

    autentica(nome, senha){
        if(nome === this.nome){
            const hash = scryptSync(senha, this.sal, 64);
            const hashBuffer = Buffer.from(this.hash, 'hex');
            if(timingSafeEqual(hash, hashBuffer)){
                console.log('Usuário autenticado com sucesso!');
                return true;
            }
        }
        console.log('Usuário ou senha incorretos!');
        return false;
    }
}

const user = new Usuario('Arneto', 'blau');
console.log(user);
user.autentica('Arneto', 'blau');