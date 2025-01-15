// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store';
import { Root } from './Roots';

import './i18n';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <Root />
    </PersistGate>
  </Provider>,
);
