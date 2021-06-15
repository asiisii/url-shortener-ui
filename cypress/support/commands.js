Cypress.Commands.add('interceptUrls', () => {
  cy.fixture('../fixtures/urls.json')
    .then(json => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', json)
    })
})
