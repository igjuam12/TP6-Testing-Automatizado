// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Take a screenshot after each test with test title and status
afterEach(function () {
  const testTitle = this.currentTest && this.currentTest.fullTitle ? this.currentTest.fullTitle() : 'unknown-test';
  const status = this.currentTest && this.currentTest.state ? this.currentTest.state : 'unknown-state';
  const name = `${status} - ${testTitle}`.replace(/[^a-z0-9\-\s_]/gi, '_');
  cy.screenshot(name, { capture: 'runner' });
});