const navbarvarText = Cypress.env('navbarText')
context('My Fisrt Test', () => {

  it('shows an active class for the current page', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  })

  it('ishould not have an active class on inactive pages', () => {
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').first()
        .should('not.have.class', 'active')
        .find('a')
        .should('have.attr', 'href', '/commands/querying')
  })
})