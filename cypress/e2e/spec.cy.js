/// <reference types="cypress" />

// drop graphql pagination to 1 or 2

for (let i = 0; i < 1; i++) {
  describe(`visit #${i + 1}`, () => {
    it("google", () => {
      cy.visit("https://www.google.com");
      cy.contains("Search");
    });
    it("youtube", () => {
      cy.visit("https://www.youtube.com");
    });
    it("github", () => {
      cy.visit("https://github.com");
      cy.contains("GitHub");
    });
    it("facebook", () => {
      cy.visit("https://www.facebook.com");
      cy.contains("Facebook");
    });
    it("accessiBe", () => {
      cy.visit("https://accessibe.com/");
      cy.contains("accessiBe");
    });
    it("deque university", () => {
      cy.visit("https://dequeuniversity.com/");
      cy.contains("Deque University");
    });
    // it("reddit", () => {
    //   cy.visit("https://reddit.com");
    //   cy.contains("Reddit");
    // });
    // it("linkedin", () => {
    //   cy.visit("https://linkedin.com");
    //   cy.contains("LinkedIn");
    // });
    // it("chatgpt", () => {
    //   cy.visit("https://chatgpt.com/");
    //   cy.contains("ChatGPT");
    // });
    // it("twitter", () => {
    //   cy.visit("https://twitter.com");
    //   cy.contains("Twitter");
    // });
    // it("zoom", () => {
    //   cy.visit("https://zoom.us");
    //   cy.contains("Zoom");
    // });
    // it("healthymealplans", () => {
    //   cy.visit("https://www.healthymealplans.com");
    //   cy.contains("Healthy Meal Plans");
    // });
    // it("twitter", () => {
    //   cy.visit("https://twitter.com");
    //   cy.contains("Twitter");
    // });
    // it("twitter", () => {
    //   cy.visit("https://twitter.com");
    //   cy.contains("Twitter");
    // });
    // it("twitter", () => {
    //   cy.visit("https://twitter.com");
    //   cy.contains("Twitter");
    // });
    // it("twitter", () => {
    //   cy.visit("https://twitter.com");
    //   cy.contains("Twitter");
    // });
  });
}
