const navbarvarText = Cypress.env('navbarText')
const token = 'abcd123'

context('My Fisrt Test - Github Actions 12', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('triggers a popover on click', () => {
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })
})