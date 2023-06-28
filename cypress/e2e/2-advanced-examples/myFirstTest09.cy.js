context('My Fisrt Test - Fixtures 09', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('THIS: ', this.data)
    })
  })

  it('uses fixture data in a network request', function () {
    cy.visit('/commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log('Res: ', res)
    })
  })

  it('pulls data from a fixture', () => {
    cy.fixture('example').then((data) => {
      cy.log('DATA: ', data)
    })
  })

  //  it('pulls data from a fixture', () => {
  //    cy.log('DATA', this.data)
  //  })

  it('updates fixture data online', () => {
    cy.fixture('example').then((data) => {
      data.email = 'andrew@email.com'
      cy.log('UPDATE: ', data)
    })
  })
})