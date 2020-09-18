import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import globalConfirmReducer from './globalConfirmReducer';
import globalDeathsReducer from './globalDeathsReducer'
import searchReducer from './searchReducer';
import dataReducer from './dataReducer';
import provinceStateReducer from './provinceStateReducer';


const rootReducer = combineReducers({
  cardData:dataReducer,
  search:searchReducer,
  globalConfirm:globalConfirmReducer,
  globalDeaths:globalDeathsReducer,
  states:provinceStateReducer
});

export const Configurestore=()=>{
	const store=createStore(
         rootReducer,
         applyMiddleware(thunk,logger)
		);
	return store;
}