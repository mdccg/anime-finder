import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import GenericPanel from '../../components/GenericPanel';
import SceneCard from '../../components/SceneCard';
import HeartCrackSolidSource from './../../assets/icons/heart-crack-solid.svg';
import Scene from './../../classes/Scene';
import Footer from './../../components/Footer';
import Logo from './../../components/Logo';
import TraceMoeService from './../../services/TraceMoeService';
import { Header, MainContent, OtherScenes, PageWrapper, SceneDescription, SelectedScene, Subheading } from './styles';

type LocationStateType = {
  blob: Blob;
}

const ScreenshotDetails = () => {
  const { state }: { state: LocationStateType | null } = useLocation();

  const [traceMoeService] = useState<TraceMoeService>(new TraceMoeService());
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);
  const [otherScenes, setOtherScenes] = useState<Scene[] | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hadFetched, setHadFetched] = useState<boolean>(false);
  const [hasNoResults, setHasNoResults] = useState<boolean>(false);

  const startFetching = () => {
    setIsFetching(true);
    setHadFetched(false);
  }

  const finishFetching = () => {
    setIsFetching(false);
    setHadFetched(true);
  }

  const selectNewScene = (indexArg: number) => {
    if (otherScenes) {
      let selectedNewScene = otherScenes.find(({ index }) => index === indexArg) as Scene;
      setSelectedScene(selectedNewScene);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      startFetching();

      if (!state) {
        finishFetching();
        return;
      }
      
      const scenes = await traceMoeService.getOccurrences(state.blob);
      
      if (scenes === null) {
        finishFetching();
        return;
      }

      if (scenes.length === 0) {
        setHasNoResults(true);
        finishFetching();
        return;
      }

      let selectedScene = scenes.at(0) as Scene;
      setSelectedScene(selectedScene);
      setOtherScenes(scenes);
      finishFetching();
    }

    fetchData();
  }, [state, traceMoeService]);

  if (!state || !state.blob) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <PageWrapper>
        <Header>
          <Logo color="black" />
        </Header>

        {isFetching && (
          <GenericPanel
            message="Carregando&hellip;"
            component={<PacmanLoader color="black" />} />
        )}

        {hadFetched && selectedScene && (
          <MainContent>
            <SelectedScene>
              <video key={selectedScene.index} width="100%" controls>
                <source key={selectedScene.index} src={selectedScene.videoURL} />
              </video>

              <Subheading>Detalhes da cena</Subheading>
              <SceneDescription data-cy="first-scene-description">
                Essa cena provavelmente é
                do <strong>{selectedScene.episode}º</strong> episódio
                de <strong>{selectedScene.portugueseTitle}</strong> ({selectedScene.originalTitle}),
                por volta do minuto {selectedScene.getReadableInitialInstant()}.
              </SceneDescription>
              <SceneDescription>
                Além disso, a cena encontrada é <strong>{selectedScene.getReadableSimilarity()}</strong> similar
                à captura de tela que você enviou para análise.
              </SceneDescription>
            </SelectedScene>

            {otherScenes && (
              <OtherScenes>
                {otherScenes.map((scene) => (
                  <SceneCard  
                    key={scene.index}
                    scene={scene}
                    selectNewScene={selectNewScene}
                    selectedSceneIndex={selectedScene.index} />
                ))}
              </OtherScenes>
            )}
          </MainContent>
        )}

        {hasNoResults && (
          <GenericPanel message="Nenhuma cena foi encontrada" imageURL={HeartCrackSolidSource} />
        )}
      </PageWrapper>
      <Footer />
    </>
  );
}

export default ScreenshotDetails;