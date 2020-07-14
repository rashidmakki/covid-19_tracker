import React from 'react';
import { CardList } from "../card-list/card-list";

class CardStats extends React.Component{
	constructor(props){
		super(props);
		this.state={
           monster:{}
		}
	}

   globaldata(){
   	fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(data=> this.setState({monster:data}))
    .catch(err=>console.log('There is an error',err))
   }
    

	componentDidUpdate(props){
     (this.props.searchField==='')?
     (
     	this.globaldata()
    ):(
     fetch(`https://covid19.mathdro.id/api/countries/${this.props.searchField.toUpperCase()}`).then(response=>response.json()).then(data=>this.setState({monster:data})).catch(err=>console.log('There is an error',err))
    )
   }

   componentDidMount(){
   	this.globaldata()
   }

	render(){
		const {monster}=this.state;
		return(
			 <CardList monster={monster} />
			);

	}
}

export default CardStats;