import ActionTypes from './ActionTypes';

const INTIALSTATE={
   isLoading:false,
   data:{},
   error:null
};

const dataReducer=(state=INTIALSTATE,action)=>{
	switch(action.type){
		case ActionTypes.GLOBAL_LOADING:
		case ActionTypes.COUNTRY_LOADING:
		return{
			...state,
			isLoading:true,
			data:{},
			error:null
		};
		case ActionTypes.ADD_COUNTRY_DATA:
		case ActionTypes.ADD_GLOBAL_DATA:
		return{
           ...state,
           isLoading:false,
           data:action.payload,
           error:null
		};
		case ActionTypes.GLOBAL_DATA_FAILED:
		case ActionTypes.COUNTRY_DATA_FAILED:
		return{
        ...state,
        isLoading:false,
        data:{},
        error:action.payload
		};
		default:
		return state;
	}
}
export default dataReducer;