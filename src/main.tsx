import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Root } from './Roots';
import { persistor, store } from './redux/store';
import './i18n';
import './styles/main.scss';
import { ThemeProvider } from './context/ThemeContext/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
