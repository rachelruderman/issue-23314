/// <reference types="cypress" />

describe('Url check', ()=>{
  it('Url load check', ()=>{

//         URL: https://prodtest.demosphere-secure.com/_/_officials-mgmt 
//                         OR
//              https://prodtest.demosphere-secure.com/_dashboard

      cy.visit('https://prodtest.demosphere-secure.com/_/_officials-mgmt')        
     
      cy.get('#user_login').type('alidem2')
      cy.get('#user_password').type('Alidem2')
      cy.get('[type="Submit"]').click()
   
  })

})