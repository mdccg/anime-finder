import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import AnimeAnalysis from './pages/AnimeAnalysis';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/anime-analysis',
    element: <AnimeAnalysis />
  },
];

export default routes;