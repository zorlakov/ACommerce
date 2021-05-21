import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import thunk from 'redux-thunk';

import { graphicsCardsReducer } from './reducers/graphicCardsReducer';

const rootReducer = combineReducers({
  graphicCards: graphicsCardsReducer,
});

const middleWares = [logger];

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, ...middleWares))
  );
};

export default configureStore;
