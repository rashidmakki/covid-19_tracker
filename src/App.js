import React from 'react';
import { CardList } from "./component/card-list/card-list";
import { SearchBox } from "./component/search-box/search-box";
import LineChart from './component/linechart/linechart';
import PieChart from './component/piechart/piechart';
import BarChart from './component/barchart/barchart';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

let searchField='';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monster:{},
      confirmedCases:[],
      deaths:[],
      deathspie:null,
      recovered:null,
      confirmed:null,
      countryrecords:[]
    }
  }
  globalData=()=>{
    fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(data=> this.setState({monster:data}))
    .catch(err=>console.log('There is an error',err))
  }
  globalLineChartData=()=>{
    fetch('https://covid19.mathdro.id/api/daily').then(response=>response.json())
    .then(data=>data.map(({ confirmed, reportDate: date }) => ({ y: confirmed.total, x:date }))).then(data=>this.setState({confirmedCases:data}));

    fetch('https://covid19.mathdro.id/api/daily').then(response=>response.json())
    .then(data=>data.map(({ deaths, reportDate: date }) => ({ y: deaths.total, x:date }))).then(data=>this.setState({deaths:data}));
  }

  componentDidMount(){
    this.globalData();
    this.globalLineChartData();
  }
  
  handleChange =(e)=>{
    searchField=e.target.value;
    return(
      (!(searchField===''))? (
      fetch(`https://covid19.mathdro.id/api/countries/${searchField.toUpperCase()}`).then(response=>response.json()).then(data=>this.setState({confirmed:data.confirmed.value,recovered:data.recovered.value,deathspie:data.deaths.value,monster:data})).catch(err=>console.log('There is an error',err)),
      fetch(`https://covid19.mathdro.id/api/countries/${searchField.toUpperCase()}/confirmed`).then(response=>response.json()).then(data=>data.map(({provinceState,active,confirmed,deaths,recovered})=>({country:provinceState,active,confirmed,deaths,recovered}))).then(data=>this.setState({countryrecords:data})).catch(err=>console.log('There is an error',err))
      ) : (this.globalData())
      );
  }

render(){
  const { monster,confirmedCases,deaths,deathspie,confirmed,recovered ,countryrecords} = this.state;

  return (
    <div className="App">
    <SearchBox
    placeholder="search country name"
    handleChange={this.handleChange}
    countryName={searchField}
    />
    <CardList monster={monster} />
   
  {
    (!(searchField===''))?
    <div>
    <PieChart confirmed={confirmed} recovered={recovered} deathspie={deathspie} />
    <BarChart countryrecords={countryrecords} />
    </div>
    :(
      <div>
      <LineChart confirmedCases={confirmedCases}  deaths={deaths}/>
      </div>)
  }
  </div>
  );
}
}

export default App;
