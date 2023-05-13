var rengokuSource;

describe('Tests over upload file', () => {
  before(() => {
    cy.fixture('rengoku').then((value) => (this.rengokuSource = value));
  });
  
  beforeEach(() => {
    cy.visit('');
  });
  
  it('should find an anime by an uploaded by user screenshot', () => {
    cy.readFile(this.rengokuSource, 'binary').then((fileContent) => {
      const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg');
      const file = new File([blob], 'rengoku.jpeg', { type: 'image/jpeg' });
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      cy.get('[data-cy="input"]').then((input) => {
        (input[0] as any).files = dataTransfer.files;
        cy.wrap(input).trigger('change', { force: true });
      });
    });
  });
});