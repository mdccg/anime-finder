var perfectScenario;

describe('Tests over test drive\'s trial image', () => {
  before(() => {
    cy.fixture('perfectScenario').then((value) => (this.perfectScenario = value));
  });

  beforeEach(() => {
    cy.visit('');
  });
  
  it('should render just the necessary, once there\'s a lot of misinformation by the API', () => {
    cy.intercept('POST', `https://api.trace.moe/search?anilistInfo`, {
      body: this.perfectScenario
    });

    cy.pressTestDriveButton();

  });
});