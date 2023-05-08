import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import ScreenshotDetails from './pages/ScreenshotDetails';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/screenshot-details',
    element: <ScreenshotDetails />
  },
];

export default routes;