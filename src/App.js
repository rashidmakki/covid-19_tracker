import React from 'react';
import { CardList } from "./component/card-list/card-list";
import { SearchBox } from "./component/search-box/search-box";
import LineChart from './component/chart/chart';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

let searchField='';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monster:{},
      confirmedCases:[],
      deaths:[]
    }
  }
  componentDidMount(){
    fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(data=> this.setState({monster:data}))
    .catch(err=>console.log('There is an error',err));

    fetch('https://covid19.mathdro.id/api/daily').then(response=>response.json()).
    then(data=>data.map(({ confirmed, reportDate: date }) => ({ y: confirmed.total, x:date }))).then(data=>this.setState({confirmedCases:data}));

    fetch('https://covid19.mathdro.id/api/daily').then(response=>response.json()).
    then(data=>data.map(({ deaths, reportDate: date }) => ({ y: deaths.total, x:date }))).then(data=>this.setState({deaths:data}));
  
  }

  handleChange =(e)=>{
    searchField=e.target.value;
    return(
      (!(searchField===''))?
      fetch(`https://covid19.mathdro.id/api/countries/${searchField.toLowerCase()}`).then(response=>response.json()).then(data=>this.setState({monster:data})).catch(err=>console.log('There is an error',err))
      : fetch('https://covid19.mathdro.id/api')
      .then(response => response.json())
      .then(data=> this.setState({monster:data}))
      .catch(err=>console.log('There is an error',err))
      );
  }
  
  render(){
    const { monster,confirmedCases,deaths } = this.state;
    
    return (
      <div className="App">
      <SearchBox
      placeholder="search country name"
      handleChange={this.handleChange}
      countryName={searchField}
      />
      <CardList monster={monster} />
      <LineChart confirmedCases={confirmedCases}  deaths={deaths}/>
      </div>
      );
  }
}

export default App;
