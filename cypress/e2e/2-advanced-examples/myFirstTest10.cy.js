const navbarvarText = Cypress.env('navbarText')
const token = 'abcd123'

context('My Fisrt Test - Custom Commands 10', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('THIS: ', this.data)
    })
  })

  it('sets and gets a token from local storage', () => {
    cy.setLocalStorage('token', token)
    cy.getLocalStorage('token').should('eq', 'abcd123')
  })

  it('it overwrites the type command by using sensitive characters', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.findByPlaceholderText('Email').type('test@email.com', { sensitive: true })
  })
})