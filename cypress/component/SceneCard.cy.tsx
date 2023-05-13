import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SceneCard from './../../src/components/SceneCard';
import Scene from '../../src/classes/Scene';

var scene: Scene;

describe('<SceneCard />', () => {
  before(() => {
    cy.fixture('scene').then((sceneObject) => (scene = new Scene(sceneObject, 0)));
  });

  it('should show the right props', () => {
    cy.mount(
      <BrowserRouter>
        <SceneCard
          scene={scene}
          selectNewScene={() => {}}
          selectedSceneIndex={0}  />
      </BrowserRouter>
    );

    cy.get('[data-cy="scene-card-anime-title"]').should('have.text', 'Shingeki no Kyojin');
    cy.get('[data-cy="scene-card-episode-ordinary-number"]').should('have.text', '7º episódio');
    cy.get('[data-cy="scene-card-similarity-percentage"]').should('have.text', '100% de similaridade');
  });
});