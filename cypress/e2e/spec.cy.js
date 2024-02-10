/// <reference types="cypress" />

describe('Github integration project settings', ()=> {
  describe('as an owner role', () => {
    context('when the GitHub app is installed', () => {
      context('and there is no connected repo', () => {
        context('The GitHub repository section', () => {
          it('Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras dictum felis nisi, consectetur efficitur risus maximus eu', ()=>{
            cy.visit('https://www.youtube.com/watch?v=hX1Mff4XrUA')
            cy.click('button.rachel')
          })
        })
      })
    })
  })
})