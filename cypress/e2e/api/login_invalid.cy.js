describe("API - Login inválido", () => {
  it("Usuario y contraseña vacíos -> 400/401", () => {
    cy.request({
      method: "POST",
      url: "/users/login",
      failOnStatusCode: false,
      body: { email: "", password: "" },
    }).then((resp) => {
      expect([400, 401]).to.include(resp.status);
      expect(resp.body).to.be.an("object");
    });
  });

  it("Credenciales incorrectas -> 401", () => {
    cy.request({
      method: "POST",
      url: "/users/login",
      failOnStatusCode: false,
      body: {
        email: "usuario_inexistente@example.com",
        password: "ClaveInvalida123",
      },
    }).then((resp) => {
      expect(resp.status).to.eq(401);
      expect(resp.body).to.be.an("object");
    });
  });
});

