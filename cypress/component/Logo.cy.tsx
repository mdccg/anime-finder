import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './../../src/components/Logo';

describe('<Logo />', () => {
  it('should change color to black according to their prop', () => {
    cy.mount(
      <BrowserRouter>
        <Logo color="black" />
      </BrowserRouter>
    );

    // cy.get('[data-cy="logo-wrapper"]').should('have.css', 'filter: invert(0)');
    cy.get('[data-cy="logo-wrapper"]').should('have.css', 'filter').and('eq', 'invert(0)');
  });

  it('should change color to white according to their prop', () => {
    cy.mount(
      <BrowserRouter>
        <Logo color="white" />
      </BrowserRouter>
    );

    cy.get('[data-cy="logo-wrapper"]').should('have.css', 'filter').and('eq', 'invert(1)');
  });
})