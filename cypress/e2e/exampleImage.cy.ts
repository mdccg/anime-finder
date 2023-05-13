describe('Tests over the test drive\'s website', () => {
  beforeEach(() => {
    cy.visit('')
  });

  it('should find the example image', () => {
    cy.get('[data-cy="test-drive-submit-button"]').click();
    try {
      cy.get('[data-cy="test-drive-submit-button"]').click();
    } catch(error) {}
    cy.get('[data-cy="first-scene-description"]').should('have.text', 'Essa cena provavelmente é do 1º episódio de Ataque dos Titãs (Shingeki no Kyojin), por volta do minuto 18:32.');
  });
})