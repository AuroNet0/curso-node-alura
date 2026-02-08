import { somaHorasExtras, calculaDescontos } from "../index.js";

describe("Funções de Folha de Pagamento", () => {
  it("Deve retornar o salário somado com o valor das horas extras", () => {
    const esperado = 100;
    const retornado = somaHorasExtras(80, 20);
    expect(retornado).toBe(esperado);
  });

  it("Deve retornar o salário somado com o valor das horas extras", () => {
    const esperado = 0;
    const retornado = somaHorasExtras(100, 100);
    expect(retornado).toBe(esperado);
  });

  it("Deve descontar o valor do salário", () => {
    const esperado = 1500;
    const retornado = calculaDescontos(2000, 500);
    expect(retornado).toBe(esperado);
  });
});
