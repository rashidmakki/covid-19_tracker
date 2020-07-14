import React from 'react';
import { SearchBox } from "./component/search-box/search-box";
import CardStats from './component/cardstats/cardstats';
import GlobalGraph from './component/globalgraph/globalgraph';
import CountryDetails from './component/countrydetails/countrydetails';
import ProvinceState from './component/provincestate/provincestate';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

let searchfield='';

class App extends React.Component{
  constructor(){
    super();
    this.state={
     searchField:searchfield
    }
  }
  
  handleChange =(e)=>{
   return this.setState({searchField:e.target.value});
  }

 render(){
  const {searchField} = this.state;

  return (
    <div className="App">
    <SearchBox
    placeholder="search country name"
    handleChange={this.handleChange}
    countryName={searchField}
    />
   <CardStats searchField={searchField} />
   
   {
    ((searchField===''))?
    <div>
    <GlobalGraph />
    </div>
    :(
      <div>
      <CountryDetails searchField={searchField} />
      <ProvinceState searchField={searchField} />
      </div>

      )
  }
  </div>
  );
}
}

export default App;
