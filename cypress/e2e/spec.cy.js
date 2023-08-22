/// <reference types="cypress" />

describe('Url check', ()=>{
  it('Url load check', ()=>{
      cy.visit('https://www.google.com/RACHEL')
  })
})