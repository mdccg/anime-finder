import Scene from './../../classes/Scene';
import { SceneCardAnimeTitle, SceneCardEpisodeOrdinaryNumber, SceneCardInformation, SceneCardSimilarityPercentage, SceneCardThumbnail, SceneCardWrapper } from './styles';

type SceneCardProps = {
  scene: Scene;
  selectNewScene: (indexArg: number) => void;
  selectedSceneIndex: number;
}

const SceneCard = ({
  scene,
  selectNewScene,
  selectedSceneIndex
}: SceneCardProps) => {
  const isSelected = scene.index === selectedSceneIndex;

  const handleClick = () => {
    if (isSelected) return;
    selectNewScene(scene.index);
  }
  
  return (
    <SceneCardWrapper onClick={handleClick} style={{
      cursor: isSelected ? 'default' : 'pointer',
      opacity: isSelected ? .7 : 1,
    }}>
      <SceneCardThumbnail src={scene.thumbURL} alt={`Cena de ${scene.originalTitle}`} />
      <SceneCardInformation>
        <SceneCardAnimeTitle data-cy="scene-card-anime-title">{scene.originalTitle}</SceneCardAnimeTitle>
        <SceneCardEpisodeOrdinaryNumber data-cy="scene-card-episode-ordinary-number">{scene.episode}º episódio</SceneCardEpisodeOrdinaryNumber>
        <SceneCardSimilarityPercentage data-cy="scene-card-similarity-percentage">{scene.getReadableSimilarity()} de similaridade</SceneCardSimilarityPercentage>
      </SceneCardInformation>
    </SceneCardWrapper>
  );
}

export default SceneCard;