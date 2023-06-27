const navbarvarText = Cypress.env('navbarText')
context('My Fisrt Test', () => {

  it('types into an email field', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(2000).then(() => {
      console.log('Waiting is finished!')
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
    })
  })
})