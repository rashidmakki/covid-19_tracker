import ActionTypes from './ActionTypes';

export const addSearchField=(searchName)=>({
	type:ActionTypes.ADD_SEARCH_FIELD,
	payload:searchName
});

export const globalLoading=()=>({
  type:ActionTypes.GLOBAL_LOADING
});

export const  addGlobalData=(data)=>({
	type:ActionTypes.ADD_GLOBAL_DATA,
	payload:data
});

export const  globalDataFailed=(error)=>({
	type:ActionTypes.GLOBAL_DATA_FAILED,
	payload:error
});

export const  countryLoading=()=>({
	type:ActionTypes.COUNTRY_LOADING
});

export const  addCountryData=(data)=>({
	type:ActionTypes.ADD_COUNTRY_DATA,
	payload:data
});

export const  countryDataFailed=(error)=>({
	type:ActionTypes.GLOBAL_DATA_FAILED,
	payload:error
});

export const  globalConfirmedCases=(confirmedCases)=>({
 type:ActionTypes.ADD_GLOBAL_GRAPH_CONFIRMED_CASES,
 payload:confirmedCases
});

export const  globalDeathsCases=(deathsCases)=>({
	type:ActionTypes.ADD_GLOBAL_GRAPH_DEATHS_CASES,
	payload:deathsCases
});

export const  globalConfirmedCasesFailed=(error)=>({
	type:ActionTypes.GLOBAL_GRAPH_CONFIRMED_CASES_FAILED,
	payload:error
});

export const  globalDeathsCasesFailed=(error)=>({
	type:ActionTypes.GLOBAL_GRAPH_DEATHS_CASES_FAILED,
	payload:error
});

export const  provinceStateLoading=()=>({
	type:ActionTypes.PROVINCE_STATE_LOADING
});

export const  addProvinceState=(state)=>({
	type:ActionTypes.ADD_PROVINCE_STATE,
	payload:state
});

export const  provinceStateFailed=(error)=>({
	type:ActionTypes.PROVINCE_STATE_FAILED,
	payload:error
});