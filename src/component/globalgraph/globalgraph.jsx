import React from 'react';
import LineChart from '../linechart/linechart';

class GlobalGraph extends React.Component{
	constructor(props){
		super(props);
		this.state={
			confirmedCases:[],
			deaths:[]
		}
	}
    componentDidMount(){
    fetch('https://covid19.mathdro.id/api/daily').then(response=>response.json())
    .then(data=>data.map(({ confirmed, reportDate: date }) => ({ y: confirmed.total, x:date }))).then(data=>this.setState({confirmedCases:data}));

    fetch('https://covid19.mathdro.id/api/daily').then(response=>response.json())
    .then(data=>data.map(({ deaths, reportDate: date }) => ({ y: deaths.total, x:date }))).then(data=>this.setState({deaths:data}));
    }

    render(){
    	const {confirmedCases,deaths}=this.state;
    return(
    	 <div className='global-graph'>
         <LineChart confirmedCases={confirmedCases}  deaths={deaths}/>
         </div>
    	);
    }
}

export default GlobalGraph;