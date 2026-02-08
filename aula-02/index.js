const somaHorasExtras = (salario, valorHorasExtras) => {
    
    if(salario && valorHorasExtras <100){
        return salario + valorHorasExtras;
    }else{
        return 0;
    }

}

const calculaDescontos = (salario, descontos) => salario - descontos;

export { somaHorasExtras, calculaDescontos };