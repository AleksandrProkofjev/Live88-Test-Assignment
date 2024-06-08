describe("Live88 Lobby", () => {
  //grouping of tests
  it("Desktop Lobby button exists", () => {
    //naming of the test
    cy.visit("https://bombaylobby.com"); //going to the declared website
    // Not sure if this is a KI, but while learnin I have found out that test should not target "Don't target elements based on CSS attributes such as: id, class, tag"
    // https://docs.cypress.io/guides/references/best-practices#Selecting-Elementsl
    cy.contains("a", "Desktop Lobby").should("have.length", 1); //search element "a", that contains Desktop lobby string. Contains fuction will return array elements that will match search query. Should checks that there is only one component.
  });
});

describe("Live88 Desktop Lobby", () => {
  it("User is redirected to Desktop lobby", () => {
    cy.visit("https://bombaylobby.com");
    cy.contains("a", "Desktop Lobby").should("have.length", 1);
    cy.contains("a", "Desktop Lobby").click(); //simulationg click on the button
    cy.origin(
      "https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun", //going from one domain to another. From cy.visit -> cy origin
      () => {
        cy.url().should(
          "contains",
          "operator/bombaydemo/bombay-live-lobby/fun" //checking that the new url that we visit matches the condition we have setup
        );
      }
    );
  });
});
