import ActionTypes from './ActionTypes';

const INTIALSTATE={
   search:''
};

const searchReducer=(state=INTIALSTATE,action)=>{
	switch(action.type){
		case ActionTypes.ADD_SEARCH_FIELD:
		return{
			search:action.payload
		};
		default:
		return state;
	}
};

export default searchReducer;