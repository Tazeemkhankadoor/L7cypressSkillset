import { Ract1Elements,Ract2Elements,RactHeaderElement1,RactHeaderElement2 } from "../PageElements/DragDropElement";
class Draging_POM{
dragdropPM(){
    const dataTransfer = new DataTransfer();
    
    const box1 = cy.get(Ract1Elements)
    const box2 = cy.get(Ract2Elements)
    
    cy.get(RactHeaderElement1).invoke('text').then(x=> {
        cy.wrap(x).as('bx1Before')
    })
    cy.get(RactHeaderElement2).invoke('text').then(x=> {
        cy.wrap(x).as('bx2Before')
    })
    
    box1.trigger('dragstart', { dataTransfer })
    box2.trigger('drop', { dataTransfer })
    
    cy.get(RactHeaderElement1).invoke('text').then(x=> {
        cy.wrap(x).as('bx1After')
    })
    cy.get(RactHeaderElement2).invoke('text').then(x=> {
        cy.wrap(x).as('bx2After')
    })
    
    cy.get('@bx1Before').then(x=>{
        cy.log(x)
        const bx1Before = x
        cy.get('@bx2After').should('eq',bx1Before)
    })
    cy.get('@bx2Before').then(x=>{
        cy.log(x)
        const bx2Before = x
        cy.get('@bx1After').should('eq',bx2Before)
    })
}

}
module.exports = new Draging_POM()