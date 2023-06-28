const navbarvarText = Cypress.env('navbarText')
context('My Fisrt Test', () => {
  beforeEach(() => {
    // cy.visit('http://localhost:8080/commands/actions')
    cy.visit('')
  })
    
  it('has an h1 tag on the page', () => {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })

  it('renders a paragraph under the h1', () => {
    cy.get('.container').eq(1).find('p').should('exist')
  })

  it('renders a sections with the correct elements', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h2').should('exist')
      cy.get('p').should('exist')
    })
  })

  it('correctly renders the cypress website link', () => {
    cy.findByText(navbarvarText).should('exist')
  })
})