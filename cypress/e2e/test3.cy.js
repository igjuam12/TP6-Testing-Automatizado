describe('Signup - valid user creation', () => {
  const signupUrl = 'https://thinking-tester-contact-list.herokuapp.com/addUser';

  function generateEmail() {
    const n = Date.now();
    return `agusbehncke${n}@gmail.com`;
  }

  it('creates a user with valid details', () => {
    cy.visit(signupUrl);

    cy.get('#firstName').clear().type('Agustin');
    cy.get('#lastName').clear().type('Behncke');
    cy.get('#email').clear().type(generateEmail());
    cy.get('#password').clear().type('hola1234');

    cy.contains('button, [type="submit"]', 'Submit', { matchCase: false })
      .should('be.enabled')
      .click();

    // Successful signup should leave the signup page
    cy.url().should('not.include', '/addUser');
  });
});

