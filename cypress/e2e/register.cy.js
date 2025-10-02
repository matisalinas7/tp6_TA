describe("Registro de usuario", () => {
  it("debe registrar un usuario nuevo", () => {
    const email = `qa.${Date.now()}@example.com`;

    cy.visit("/addUser");
    cy.get("#firstName").type("QA");
    cy.get("#lastName").type("User");
    cy.get("#email").type(email);
    cy.get("#password").type("Password123");
    cy.get("#submit").click();

    cy.contains("h1", "Contact List").should("be.visible");
  });
});

