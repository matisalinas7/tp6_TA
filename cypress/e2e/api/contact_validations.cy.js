const loginAndGetToken = () => {
  const email = `qa.user.${Date.now()}@example.com`;
  return cy
    .request({
      method: "POST",
      url: "/users",
      body: {
        firstName: "QA",
        lastName: "User",
        email,
        password: "Password123",
      },
    })
    .then(() => {
      return cy.request({
        method: "POST",
        url: "/users/login",
        body: { email, password: "Password123" },
      });
    })
    .then((resp) => resp.body.token);
};

describe("API - Contacto validaciones", () => {
  let token;

  beforeEach(() => {
    return loginAndGetToken().then((t) => (token = t));
  });

  it("Falta firstName -> 400", () => {
    cy.request({
      method: "POST",
      url: "/contacts",
      failOnStatusCode: false,
      headers: { Authorization: `Bearer ${token}` },
      body: { lastName: "Perez" },
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.be.an("object");
    });
  });

  it("Falta lastName -> 400", () => {
    cy.request({
      method: "POST",
      url: "/contacts",
      failOnStatusCode: false,
      headers: { Authorization: `Bearer ${token}` },
      body: { firstName: "Juan" },
    }).then((resp) => {
      expect(resp.status).to.eq(400);
      expect(resp.body).to.be.an("object");
    });
  });
});

