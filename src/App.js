import React from 'react';
import { CardList } from "./component/card-list/card-list";
import { SearchBox } from "./component/search-box/search-box";
import LineChart from './component/chart/chart';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monster:{},
      searchfield:'',
      data:[],
      deaths:[]
    }
  }
  componentDidMount(){
    fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(data=> this.setState({monster:data}))
    .catch(err=>console.log('There is an error',err));

    fetch('https://covid19.mathdro.id/api/daily').then(response=>response.json()).
    then(data=>data.map(({ confirmed, reportDate: date }) => ({ y: confirmed.total, x:date }))).then(data=>this.setState({data:data}));

    fetch('https://covid19.mathdro.id/api/daily').then(response=>response.json()).
    then(data=>data.map(({ deaths, reportDate: date }) => ({ y: deaths.total, x:date }))).then(data=>this.setState({deaths:data}));
  
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  
  render(){
    const { monster, searchField } = this.state;
    
    return (
      <div className="App">
      <SearchBox
      placeholder="search country name"
      handleChange={this.handleChange}
      />
      <CardList monster={monster} />
      <LineChart data={this.state.data}  deaths={this.state.deaths}/>
      </div>
      );
  }
}

export default App;
