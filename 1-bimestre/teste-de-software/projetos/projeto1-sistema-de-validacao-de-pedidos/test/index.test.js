const validarPedido = require("../index")

test("Validar Pedido", () => {
    let pedido = {
        cliente: "Carlos",
        total: 150,
        itens: ["Produto A"],
    }
    expect(validarPedido(pedido)).toBeTruthy()
})

test("Cliente", () => {
    let pedido = {

        total: 150,
        itens: ["Produto A"],
    }
    expect(validarPedido(pedido)).toBeFalsy()
})

test("Pedido", () => {
    let pedido = {
        cliente: "Carlos",
	    total: 150,
	    itens: [],
    }
    expect(validarPedido(pedido)).toBeFalsy()
})

test("Total", () => {
    let pedido = {
        cliente: "Carlos",
	    total: 0,
	    itens: [],
    }
    expect(validarPedido(pedido)).toBeFalsy()
})
