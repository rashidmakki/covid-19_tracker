import React from 'react';
import PieChart from '../piechart/piechart';
import Spinner2 from '../spinner2/spinner2';

class CountryDetails extends React.Component{
	constructor(props){
		super(props);
		this.state={
			deathspie:null,
			recovered:null,
			confirmed:null,
      
		}
	}
	componentDidUpdate(props){
			fetch(`https://covid19.mathdro.id/api/countries/${this.props.searchField.toUpperCase()}`).then(response=>response.json()).then(data=>this.setState({confirmed:data.confirmed.value,recovered:data.recovered.value,deathspie:data.deaths.value})).catch(err=>console.log('There is an error',err))
	
	}
	render(){
		const {confirmed,recovered,deathspie}=this.state;
		return(
            <div className='country-Details'>
            {
             (confirmed===null)?(
             	<Spinner2 />
             	):(
             <PieChart confirmed={confirmed} recovered={recovered} deathspie={deathspie} />
            )
            }
            </div>
			);
	}

}

export default CountryDetails;