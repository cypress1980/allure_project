describe("Two Domain urls in different Test case", function () {
  it("Open the Url", () => {
    cy.visit("https://www.cypress.io/");
  });

  it("Visit the url and Login  to new origin", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[id="user-name"]').clear().type("standard_user");
    cy.get('[id="password"]').clear().type("secret_sauce");
    cy.get('[name="login-button"]').click();
    cy.contains("Products").should("be.visible");
  });
});

describe("Two Domain urls under Same different  Test case", function () {
  it("Open the Url", () => {
    cy.visit("https://www.cypress.io/");
    cy.origin("https://www.saucedemo.com/", () => {
      cy.get('[id="user-name"]').clear().type("standard_user");
      cy.get('[id="password"]').clear().type("secret_sauce");
      cy.get('[name="login-button"]').click();
      cy.contains("Products").should("be.visible");
    });
  });
});
