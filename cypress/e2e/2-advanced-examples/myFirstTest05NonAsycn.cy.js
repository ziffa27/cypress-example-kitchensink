context('My Fisrt Test - Non-Cypress Async Promises 05', () => {

  it('types into an email field', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(5000).then(() => {
      console.log('Waiting is finished')
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
      console.log('Test are done')
    })
  })
})