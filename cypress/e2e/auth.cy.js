const baseURL = "http://127.0.0.1:8080/";

describe("Authenticated user login", () => {
  beforeEach(() => {
    cy.visit(baseURL);
    cy.clearLocalStorage();
  });

  it("Can login", () => {
    // gets the currently showing close button
    cy.get(".btn-close:visible").click();
    cy.wait(500);
    //gets the login button in header
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type(`testersen@noroff.no`);
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(`Mypassword{enter}`);
    cy.wait(2000);
    cy.url().should("include", "profile");
  });
});
