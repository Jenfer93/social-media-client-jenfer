const baseURL = "http://127.0.0.1:8080/";

describe("Create a new post", () => {
  beforeEach(() => {
    cy.visit(baseURL);
    cy.clearLocalStorage();
  });

  it("CAN create post", () => {
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
    cy.get(`a[href="/?view=post"]`).click();
    cy.wait(1500);
    cy.url().should("include", "post");
    cy.get("#postTitle").should("exist").type("This is a Cypresstest");
    cy.get("#postTags").should("exist").type("test, cypress");
    cy.get("#postMedia")
      .should("exist")
      .type("https://picsum.photos/id/25/367/267");
    cy.get("#postBody").should("exist").type("I'm so glad this is working");
    cy.get('button[data-action="submit"]:visible').click();
    cy.wait(5000);
  });
});
