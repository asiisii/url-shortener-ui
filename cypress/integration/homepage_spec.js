describe('Homepage', () => {
  beforeEach(() => {
    cy.interceptUrls()
    .visit('http://localhost:3000')
  })

  it('should be able to see the page title', () => {
    cy.get('.App')
      .get('header')
      .get('h1').should('have.text','URL Shortener')
      .get('.url')
      .get('h3').should('have.text','Test 1')
      .get('a')
      .contains('http://localhost:3001/useshorturl/1')
      .get('p')
      .contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })
})