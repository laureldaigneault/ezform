import ReactDOM from 'react-dom/client';
import { ThemeProvider, defaultTheme } from './styles/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>
);
