import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
