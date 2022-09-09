describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.instagram.com/accounts/login/')
  })

  it('Logs into Instagram', () => {
    cy.contains('Only allow essential cookies').click()
    cy.get('input[name="username"]').type('felixleon6466')
    cy.get('input[name="password"]').type('FlexLeon6466@@@')
    cy.contains('Log In').click()

  })

})