import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
// import rootSaga from './sagas';
import actionWatcher from './sagas/Repos';
import providerWatcher from './sagas/Provider';

const initialState = {};

const middleware = [thunk];

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware, sagaMiddleware),
        composeEnhancers()
    )
);

sagaMiddleware.run(actionWatcher);
sagaMiddleware.run(providerWatcher);
// sagaMiddleware.run(rootSaga);

export default store;