import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FontStyles } from './assets/fonts';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/global';
import PaletteStyles from './styles/palette';

const rootHTMLElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHTMLElement);

root.render(
  <BrowserRouter>
    <PaletteStyles />
    <GlobalStyles />
    <FontStyles />
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
