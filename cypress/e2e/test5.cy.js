describe('Signup - existing email', () => {
const signupUrl = 'https://thinking-tester-contact-list.herokuapp.com/addUser';

it('blocks submit and shows validation for invalid email', () => {
  cy.visit(signupUrl);

  cy.get('#firstName').clear().type('Agustin');
  cy.get('#lastName').clear().type('Longarini');
  cy.get('#email').clear().type('ambrogettiigna@gmail.com');
  cy.get('#password').clear().type('tefusitealab');

  cy.contains('button, [type="submit"]', 'Submit', { matchCase: false }).click({ force: true });

  // Native email validation should trigger on invalid format
  cy.get('#email').then(($el) => {
    const message = $el[0].validationMessage;
    expect(message, 'email field validation message').to.not.equal('');
  });

  // Should remain on the signup page
  cy.url().should('eq', signupUrl);
});
});
