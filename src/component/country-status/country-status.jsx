import React from 'react';



class CountryList extends React.Component{
  constructor(){
   this.state={
   	country:[],
   	countryDetail:{}
   }
  }
 componentDidMount(){
 	fetch('https://covid19.mathdro.id/api/countries').then(response=>response.json()).then((data)=>this.setState({country:data.countries));

 	country.map(country=>fetch(`https://covid19.mathdro.id/api/countries/${country.name)}`).then(response=>response.json()).then(data=>this.setState({countryDetail:data}))));

 }

  render(){
  	const {countryDetail}=this.state
  	return(
  		<div className='country-list'>
  		<Country countryDetail={countryDetail} />
  		<div>
  		);
  }



}
export default CountryList;