import ActionTypes from './ActionTypes';

const INTIALSTATE={
	isLoading:false,
	countryRecords:[],
	error:null
};

const provinceStateReducer=(state=INTIALSTATE,action)=>{
	switch(action.type){
		case ActionTypes.PROVINCE_STATE_LOADING:
		return{
			...state,
            isLoading:true,
			countryRecords:[],
			error:null
		};
		case ActionTypes.ADD_PROVINCE_STATE:
		return{
           ...state,
           isLoading:false,
           countryRecords:[...state.countryRecords,action.payload],
           error:null
           
		};
		case ActionTypes.PROVINCE_STATE_FAILED:
		return{
        ...state,
        isLoading:false,
        countryRecords:[],
        error:action.payload
		};
		default:
		return state;
	}
}
export default provinceStateReducer;