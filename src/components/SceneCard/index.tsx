import Scene from './../../classes/Scene';
import { SceneCardAnimeTitle, SceneCardEpisodeOrdinaryNumber, SceneCardInformation, SceneCardSimilarityPercentage, SceneCardThumbnail, SceneCardWrapper } from './styles';

type SceneCardProps = {
  scene: Scene;
  selectedNewScene: (indexArg: number) => void;
  selectedSceneIndex: number;
}

const SceneCard = ({
  scene,
  selectedNewScene,
  selectedSceneIndex
}: SceneCardProps) => {
  const isSelected = scene.index === selectedSceneIndex;

  const handleClick = () => {
    if (isSelected) return;
    selectedNewScene(scene.index);
  }
  
  return (
    <SceneCardWrapper onClick={handleClick} style={{
      cursor: isSelected ? 'default' : 'pointer',
      opacity: isSelected ? .7 : 1,
    }}>
      <SceneCardThumbnail src={scene.thumbURL} alt={`Cena de ${scene.originalTitle}`} />
      <SceneCardInformation>
        <SceneCardAnimeTitle>{scene.originalTitle}</SceneCardAnimeTitle>
        <SceneCardEpisodeOrdinaryNumber>{scene.episode}º episódio</SceneCardEpisodeOrdinaryNumber>
        <SceneCardSimilarityPercentage>{scene.getReadableSimilarity()} de similaridade</SceneCardSimilarityPercentage>
      </SceneCardInformation>
    </SceneCardWrapper>
  );
}

export default SceneCard;