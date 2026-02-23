

test("5 é maior que três", () => {
    expect(5).toBeGreaterThan(3)
})

test("Teste de Software", () => {
    expect("Software").toString(true)
})

test("objeto esperado", () => {
    let objeto = { aprovado: true}
    expect(objeto).toBeTruthy()
})