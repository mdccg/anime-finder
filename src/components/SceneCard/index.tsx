import Scene from './../../classes/Scene';
import { SceneCardWrapper } from './styles';

type SceneCardProps = {
  scene: Scene;
}

const SceneCard = ({ scene: { originalTitle, episode, getReadableSimilarity } }: SceneCardProps) => {

  return (
    <SceneCardWrapper>

    </SceneCardWrapper>
  );
}

export default SceneCard;