import ActionTypes from './ActionTypes';

const INTIALSTATE={
	confirmedCases:[],
	error:null
};

const globalConfirmReducer=(state=INTIALSTATE,action)=>{
	switch(action.type){
		case ActionTypes.ADD_GLOBAL_GRAPH_CONFIRMED_CASES:
		return{
			...state,
	        confirmedCases:[...state.confirmedCases,action.payload],
			error:null
		};
		case ActionTypes.GLOBAL_GRAPH_CONFIRMED_CASES_FAILED:
		return{
            ...state,
            error:action.payload,
            confirmedCases:[]
		}
		default:
		return state;
	}
};

export default globalConfirmReducer;