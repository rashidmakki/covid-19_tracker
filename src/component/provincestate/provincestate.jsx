import React from 'react';
import BarChart from '../barchart/barchart';

class ProvinceState extends React.Component{
	constructor(props){
		super(props);
		this.state={
         countryrecords:[]
		}
	}
    componentDidUpdate(props){
    fetch(`https://covid19.mathdro.id/api/countries/${this.props.searchField.toUpperCase()}/confirmed`).then(response=>response.json()).then(data=>data.map(({provinceState,active,confirmed,deaths,recovered})=>({country:provinceState,active,confirmed,deaths,recovered}))).then(data=>this.setState({countryrecords:data})).catch(err=>console.log('There is an error',err))
    }
	render(){
		const {countryrecords}=this.state;
   return(
    <div className='province-state'>
    <BarChart countryrecords={countryrecords} />
    </div>
    );
	}
};

export default ProvinceState;