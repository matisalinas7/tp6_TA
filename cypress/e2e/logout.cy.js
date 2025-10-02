describe("Logout de usuario", () => {
  it("debe cerrar sesión correctamente", () => {
    const email = `qa.${Date.now()}@example.com`;

    // Registrar y loguear
    cy.visit("/addUser");
    cy.get("#firstName").type("QA");
    cy.get("#lastName").type("User");
    cy.get("#email").type(email);
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains("h1", "Contact List").should("be.visible");

    // Logout
    cy.get("#logout").click();
    cy.contains("h1", "Contact List App").should("be.visible");
  });
});

