import React from 'react';
import GenericPanel from './../../src/components/GenericPanel';

describe('<GenericPanel />', () => {
  it('should show the rendered message', () => {
    const message = 'Nenhum resultado foi encontrado';

    cy.mount(<GenericPanel message={message} />);

    cy.get('[data-cy="generic-panel-message"]').should('have.text', message);
  });
});