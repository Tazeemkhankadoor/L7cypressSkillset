import {mainElement,divElements} from "../PageElements/InfiniteScrollElement";

class InfiniteScroll_POM{
    testInfiniteScroll() {
        cy.get(divElements).then(AllOfDivs=>{
            var t= Math.floor((Math.random() * 10) + 1);
            while(t){
                cy.window().scrollTo('bottom')
                cy.wait(2000)
                t-=1
            }
            cy.get(divElements).its('length').should('be.gt',AllOfDivs.length)
        })
    }


}


module.exports = new InfiniteScroll_POM()