import InfiniteScroll_POM from "../support/PageObjects/Infinite_Scroll";
describe("Infinite Scroll Spec", () => {

    it("Verifying the Infinite scroll", () => {
  
      cy.visit(Cypress.env('Infinitescroll_URL'));
      InfiniteScroll_POM.testInfiniteScroll()
    
  })
    
});
    
  