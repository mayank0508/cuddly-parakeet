import { creareStore, applyMiddleware } from 'redux'; // this is the middleware function
import logger from 'redux/logger'; // this only catches the function and returns

import rootReducer from './root-reducer';

const middleware = [logger];

const store = creareStore(rootReducer, applyMiddleware(...middleware));


export default store;