describe('Login - submit enabled with valid inputs', () => {
  const loginUrl = 'https://thinking-tester-contact-list.herokuapp.com/';

  const validEmail = 'enzocervi@gmail.com';
  const validPassword = 'hola1234';

  it('enables Submit when email and password are valid', () => {
    cy.visit(loginUrl);

    cy.get('#email').clear().type(validEmail);
    cy.get('#password').clear().type(validPassword);

    cy.contains('button, [type="submit"]', 'Submit', { matchCase: false })
      .should('be.enabled');
  });
});
