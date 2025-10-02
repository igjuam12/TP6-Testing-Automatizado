describe('Login - invalid email format', () => {
    const loginUrl = 'https://thinking-tester-contact-list.herokuapp.com/';
  
    const invalidEmails = ['user@domain', 'userdomain.com'];
  
    beforeEach(() => {
      cy.visit(loginUrl);
    });
  
    invalidEmails.forEach((invalidEmail) => {
      it(`should block login and show validation for invalid email: ${invalidEmail}`, () => {
        // Fill form with invalid email and any password
        cy.get('#email').clear().type(invalidEmail);
      cy.get('#password').clear().type('prueba1234');
  
        // Try to submit
        cy.contains('button, [type="submit"]', 'Submit', { matchCase: false }).click({ force: true });
  
        // Assert native HTML5 email validation triggers (non-empty validationMessage)
        cy.get('#email').then(($el) => {
          const message = $el[0].validationMessage;
          expect(message, 'email field validation message').to.not.equal('');
        });
  
        // Stay on the login page (no navigation)
        cy.url().should('eq', loginUrl);
  
        // Optionally, check if any visible error hint appears in the UI
        // This is resilient to different markup but checks for common error patterns
        cy.get('body').then(($body) => {
          const possibleError = $body.find('[role="alert"], .error, .alert, .validation, .error-message');
          if (possibleError.length) {
            cy.wrap(possibleError).should('be.visible');
          }
        });
      });
    });
  });
  
  
  