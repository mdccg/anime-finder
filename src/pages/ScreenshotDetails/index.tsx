import { Navigate, useLocation } from 'react-router-dom';
import Logo from './../../components/Logo';

type LocationStateType = {
  blob: Blob;
}

const ScreenshotDetails = () => {
  const { state }: { state: LocationStateType } = useLocation();

  // TODO mostrar toast dizendo que não foi possível carregar a screenshot
  if (!state.blob) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <Logo color="black" />
    </div>
  );
}

export default ScreenshotDetails;