import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';

import { store } from './redux/store';

import { StateProvider } from './utils/StateProvider.jsx';
import reducer, { initialState } from './utils/reducer';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Provider>
);
