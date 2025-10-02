describe("Login de usuario", () => {
  it("debe loguear un usuario existente", () => {
    // Se intenta login con usuario conocido de demo del sitio
    // Si el sitio de demo no persiste usuarios, se puede primero registrar y luego loguear
    const email = `qa.${Date.now()}@example.com`;

    // Registrar
    cy.visit("/addUser");
    cy.get("#firstName").type("QA");
    cy.get("#lastName").type("User");
    cy.get("#email").type(email);
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains("h1", "Contact List").should("be.visible");

    // Logout para probar login
    cy.get("#logout").click();
    cy.contains("h1", "Contact List App").should("be.visible");

    // Login
    cy.get("#email").type(email);
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.contains("h1", "Contact List").should("be.visible");
  });
});



