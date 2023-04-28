import Draging_POM from "../support/PageObjects/DragDrop"

describe("Drag and drop Spec", () => {


    it('It should drag element A to B and assert position change',()=>{
      cy.visit(Cypress.env('DrapDrope_URL'))
      Draging_POM.dragdropPM()
    })
  
  });
