import ActionTypes from './ActionTypes';

const INTIALSTATE={
	deathsCases:[],
	error:null
};

const globalDeathsReducer=(state=INTIALSTATE,action)=>{
	switch(action.type){
		case ActionTypes.ADD_GLOBAL_GRAPH_DEATHS_CASES:
		return{
			...state,
			deathsCases:[...state.deathsCases,action.payload],
			error:null
		};
		case ActionTypes.GLOBAL_GRAPH_DEATHS_CASES_FAILED:
		return{
            ...state,
            error:action.payload,
            deathsCases:[]
		}
		default:
		return state;
	}
};

export default globalDeathsReducer;