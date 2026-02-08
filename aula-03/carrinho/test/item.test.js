import Item from "../item";

describe('Testes para a classe Item', () => {

    it('Cada item deve ter 3 propriedades', ()=>{
        const item = new Item('Uva', 5, 2);
        
        expect(item.nome).toBe('Uva');
        expect(item.valor).toBe(5);
        expect(item.quantidade).toBe(2);
    })
    
    it('Deve calcular o valor total do item', ()=>{
        const item = new Item('Maça', 1, 6);

        expect(item.pegaValorTotalItem()).toBe(6);
    })

});