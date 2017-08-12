import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import './index.css';

const history = createHistory();
export const store = configureStore(history);

const rootEl = document.getElementById('root');
const render = Component => ReactDOM.render(
  <AppContainer>
    <Component store={store} history={history} />
  </AppContainer>,
  rootEl
);

render(Root);
if (module.hot) module.hot.accept('./containers/Root', () => render(Root));
