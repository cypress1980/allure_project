describe("Two Domain urls in different Test case", function () {
  it("Open the Url", () => {
    cy.visit("https://www.cypress.io/");
  });

  it("Visit the url and Login into the site", () => {
    cy.visit(
      "http://automationpractice.com//index.php?controller=authentication&back=my-account"
    );
    cy.wait(2000);
    cy.get('[id="email"]').clear().type("multidomain@yopmail.com");
    cy.get('[id="passwd"]').clear().type("123456");
    cy.get('[id="SubmitLogin"]').click();
  });
});

describe("Two Domain urls under Same Test cases", function () {
  it("Open two Urls and try to login into second url ", () => {
    cy.visit("https://www.cypress.io/");
    cy.visit(
      "http://automationpractice.com//index.php?controller=authentication&back=my-account"
    );
    cy.wait(2000);
    cy.get('[id="email"]').clear().type("multidomain@yopmail.com");
    cy.get('[id="passwd"]').clear().type("123456");
    cy.get('[id="SubmitLogin"]').click();
  });
});
