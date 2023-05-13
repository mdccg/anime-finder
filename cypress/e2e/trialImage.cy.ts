describe('Tests over the test drive\'s website', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should find the anime of the trial screenshot', () => {
    cy.pressTestDriveButton();

    cy.get('[data-cy="first-scene-description"]')
      .should('have.text',
        'Essa cena provavelmente é do 1º episódio de Ataque dos Titãs (Shingeki no Kyojin), por volta do minuto 18:32.'
      );
  });
})