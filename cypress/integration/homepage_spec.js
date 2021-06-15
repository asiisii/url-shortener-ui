describe('Homepage', () => {
  beforeEach(() => {
    cy.interceptUrls()
    .visit('http://localhost:3000')
  })

  it('should be able to see the page title', () => {
    cy.get('.App')
  })
})