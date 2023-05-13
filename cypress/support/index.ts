declare namespace Cypress {
  interface Chainable {
    pressTestDriveButton(): Chainable<Element>;
    uploadImage(): Chainable<Element>;
  }
}