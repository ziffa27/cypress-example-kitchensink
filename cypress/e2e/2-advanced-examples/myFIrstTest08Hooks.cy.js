context('My Fisrt Test - Hooks Commonds 08', () => {
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('length', 10)
  })

  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.log('after each is here')
  })

  after(() => {
    cy.log('the final after hook runs once')
  })

  it('has an h1 tag on the page', () => {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })

})