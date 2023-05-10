import { useLocation } from 'react-router-dom';

const ScreenshotDetails = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <span>Outra tela</span>
    </div>
  );
}

export default ScreenshotDetails;