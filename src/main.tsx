// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store';
import './styles/main.scss';
import { Root } from './Roots';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <Root />
    </PersistGate>
  </Provider>,
  // </StrictMode>,
);
