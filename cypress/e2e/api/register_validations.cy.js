describe("API - Registro validaciones", () => {
  it("Email inválido -> 400", () => {
    cy.request({
      method: "POST",
      url: "/users",
      failOnStatusCode: false,
      body: {
        firstName: "Test",
        lastName: "User",
        email: "no-es-email",
        password: "Password123",
      },
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.be.an("object");
    });
  });

  it("Contraseña corta (<7) -> 400", () => {
    cy.request({
      method: "POST",
      url: "/users",
      failOnStatusCode: false,
      body: {
        firstName: "Test",
        lastName: "User",
        email: `test.user.${Date.now()}@example.com`,
        password: "123456",
      },
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.be.an("object");
    });
  });
});

