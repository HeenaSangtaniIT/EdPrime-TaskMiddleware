import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import cardSagas from "./card/card.saga";
import reducers from "./redux/reducers";

import { loadState, saveState } from './common/localStorage';
import { loggerMiddleware } from './redux/middleware/logger-middleware';
import _ from "lodash";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const persistStore = loadState();
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, persistStore, composeEnhancer(applyMiddleware(sagaMiddleware, loggerMiddleware)))

    sagaMiddleware.run(cardSagas);

    store.subscribe(_.throttle(() => {
        saveState(store.getState());
    }, 1000))

    return store;

}
export default configureStore;