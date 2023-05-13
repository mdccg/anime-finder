describe('Tests over upload file', () => {
  beforeEach(() => {
    cy.visit('');
  });
  
  it('should find an anime by an uploaded by user screenshot', () => {
    cy.uploadImage();
  });
});