import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Scene from './../../classes/Scene';
import Footer from './../../components/Footer';
import Logo from './../../components/Logo';
import TraceMoeService from './../../services/TraceMoeService';
import { Header, ImagesSolid, MainContent, OtherScenes, PageWrapper, PickAnotherPictureButton, PickAnotherPictureButtonLabel, SelectedScene } from './styles';
import ReadOnlyProgressBar from '../../components/ReadOnlyProgressBar';

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

      console.log(scenes.at(0));
      
      setSelectedScene(scenes.at(0) as Scene);
      setOtherScenes(scenes.slice(1));
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
          <PickAnotherPictureButton>
            <ImagesSolid />
            <PickAnotherPictureButtonLabel>Escolher outra imagem</PickAnotherPictureButtonLabel>
          </PickAnotherPictureButton>
        </Header>
        
        {isFetching && (
          <>
            {/* TODO loading aqui */}
          </>
        )}

        {hadFetched && selectedScene && (
          <MainContent>
            <SelectedScene>
              <video width="100%" controls>
                <source src={selectedScene.video} />
              </video>

              <ReadOnlyProgressBar
                exactMoment={selectedScene.from}
                episodeDuration={selectedScene.to} />
            </SelectedScene>
            
            <OtherScenes>
              &nbsp;
            </OtherScenes>
          </MainContent>
        )}
      </PageWrapper>
      <Footer />
    </>
  );
}

export default ScreenshotDetails;