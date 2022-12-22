import Order from "../src/Order";


test("Nao deve criar um pedido com o CPF invalido", function () {
    expect(() => new Order("111.111.111-11")).toThrow(new Error("CPF invalido"));
     

})