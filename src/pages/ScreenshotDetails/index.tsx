import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Scene from './../../classes/Scene';
import Footer from './../../components/Footer';
import Logo from './../../components/Logo';
import TraceMoeService from './../../services/TraceMoeService';
import { Header, ImagesSolid, MainContent, OtherScenes, PageWrapper, PickAnotherPictureButton, PickAnotherPictureButtonLabel, SceneDescription, SelectedScene, Subheading } from './styles';

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

  useEffect(() => {
    const fetchData = async () => {
      startFetching();

      if (!state) {
        // TODO mostrar toast dizendo que não foi possível carregar a screenshot
        finishFetching();
        return;
      }
      
      const scenes = await traceMoeService.getOccurrences(state.blob);
      
      if (scenes === null) {
        // TODO mostrar toast de erro dizendo que deu zika
        finishFetching();
        return;
      }

      if (scenes.length === 0) {
        // TODO mostrar toast de erro dizendo que não foi possível localizar nenhum anime
        // com essa screenshot
        setHasNoResults(true);
        finishFetching();
        return;
      }

      setSelectedScene(scenes.at(0) as Scene);
      setOtherScenes(scenes.slice(1));
      finishFetching();
    }

    fetchData();
    finishFetching();
  }, [state, traceMoeService]);

  if (!state || !state.blob) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <PageWrapper>
        <Header>
          <Logo color="black" />
          <PickAnotherPictureButton>
            <ImagesSolid />
            <PickAnotherPictureButtonLabel>
              Escolher outra imagem
            </PickAnotherPictureButtonLabel>
          </PickAnotherPictureButton>
        </Header>

        {isFetching && <>{/* TODO loading aqui */}</>}

        {hadFetched && selectedScene && (
          <MainContent>
            <SelectedScene>
              <video width="100%" controls>
                <source src={selectedScene.videoURL} />
              </video>

              <Subheading>Detalhes da cena</Subheading>
              <SceneDescription>
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

            <OtherScenes>&nbsp;</OtherScenes>
          </MainContent>
        )}

        {hasNoResults && <>{/* TODO nao encontrado aqui */}</>}
      </PageWrapper>
      <Footer />
    </>
  );
}

export default ScreenshotDetails;