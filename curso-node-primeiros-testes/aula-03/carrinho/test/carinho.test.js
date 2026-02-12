import Carrinho from "../carrinho.js";
import Item from "../item";

describe("Testes do carrinho", () => {
  it("Deve inicializar vazio", () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });

  it("Deve ter itens", () => {
    const item = new Item("Uva", 5, 2);
    const item2 = new Item("Maça", 1, 6);
    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe("object");

    expect(carrinho.itens.length).toBe(2);

    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it("Deve conter a propriedade frete", () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty("frete");
  });

  it('Deve lançar um erro ao finalizar a compra com o carrinho vazio', () => {
    const carrinho = new Carrinho();

    expect(() => carrinho.finalizaCompra()).toThrow('Carrinho de compras vazio');

  });

  it('Deve adicionar frete', ()=>{
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(15);
    expect(carrinho.frete).toBe(15);
  })

  it('Deve finalizar a compra com sucesso', () => {
    const item = new Item("Uva", 5, 2);
    const item2 = new Item("Maça", 1, 6);
    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(15);
    carrinho.calculaTotal();

    expect(typeof carrinho.finalizaCompra()).toBe('object');
    expect(carrinho.finalizaCompra()).toHaveProperty('subtotal');
    expect(carrinho.finalizaCompra()).toHaveProperty('frete');
    expect(carrinho.finalizaCompra()).toHaveProperty('total');

  });

  it('Deve finalizar a compra com sucesso 2', () => {
    const item = new Item("Uva", 5, 2);
    const item2 = new Item("Maça", 1, 6);
    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(15);
    carrinho.calculaTotal();

    expect(carrinho.finalizaCompra()).toStrictEqual({
        subtotal: 16,
        frete: 15,
        total: 31
    });

  });

  it('Deve calcular o total corretamente', () => {
    const item = new Item("Uva", 5, 2);
    const item2 = new Item("Maça", 1, 6);
    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(15);

    expect(carrinho.calculaTotal()).toBe(31);
  });
  
});
