context('My Fisrt Test - Async Cypress 04', () => {

  it('types into an email field', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    // cy.wait(5000) <--- this is unnecessary
    console.log('Waiting is finished - JavaScrip run before Cypress so not good')
  })

})