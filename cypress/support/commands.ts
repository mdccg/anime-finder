/// <reference types="cypress" />

Cypress.Commands.add('pressTestDriveButton', () => {
  cy.get('[data-cy="test-drive-submit-button"]').click();
  cy.get('[data-cy="test-drive-submit-button"]').click();
});

Cypress.Commands.add('uploadImage', () => {
  cy.get('input[type="file"]').selectFile('cypress/fixtures/rengoku.jpeg', { force: true });
});