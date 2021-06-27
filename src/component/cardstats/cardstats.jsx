import React from 'react';
import { CardList } from "../card-list/card-list";
import Spinner from '../spinner/spinner';

class CardStats extends React.Component{
	constructor(props){
		super(props);
		this.state={
           monster:{}
		}
	}
    

	componentDidUpdate(prevProps,prevState){
    if(this.props.searchField===prevProps.searchField){
            return null;
        }
    if(this.props.searchField==='' || prevProps.searchField===''){
      fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(({confirmed,recovered,deaths,lastUpdate})=>({confirmed,recovered,deaths,lastUpdate}))
    .then(data=> this.setState({monster:data}))
    .catch(err=>console.log('There is an error',err))
     }else{
     fetch(`https://covid19.mathdro.id/api/countries/${this.props.searchField.toUpperCase()}`).then(response=>response.json()).then(data=>this.setState({monster:data})).catch(err=>console.log('There is an error',err))
      }
   }

   componentDidMount(){
   	fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(({confirmed,recovered,deaths,lastUpdate})=>({confirmed,recovered,deaths,lastUpdate}))
    .then(data=> this.setState({monster:data}))
    .catch(err=>console.log('There is an error',err))
   }

	render(){
		const {monster}=this.state;
		return(
      <div>
      {
        (Object.keys(monster).length!==4)?(
          <Spinner />
        ):(
        <CardList monster={monster} />
        )	
      }

      </div>
			);

	}
}

export default CardStats;