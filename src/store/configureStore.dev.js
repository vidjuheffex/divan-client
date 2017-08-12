import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history, initialState) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancer = compose(
    applyMiddleware(...middlewares),
    DevTools.instrument()
  );

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers',
                      () => {
                        return store.replaceReducer(require('../reducers').default);
                      });
  }
  sagaMiddleware.run(rootSaga);
  return store;
}
