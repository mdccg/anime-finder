import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Footer from './../../components/Footer';
import TraceMoeService from './../../services/TraceMoeService';
import Logo from './../../components/Logo';
import { Header, ImagesSolid, PageWrapper, PickAnotherPictureButton, PickAnotherPictureButtonLabel } from './styles';
import Scene from '../../classes/Scene';

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
        finishFetching();
        return;
      }
      
      setSelectedScene(scenes.at(0) as Scene);
      setOtherScenes(scenes.slice(1));

      finishFetching();
    }

    fetchData();
  }, []);

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
      </PageWrapper>
      <Footer />
    </>
  );
}

export default ScreenshotDetails;