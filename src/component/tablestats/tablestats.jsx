import React from 'react';
import Table from '../table/table.jsx';
import './tablestats.css';

const todaysFullDate=new Date();
const todaysdate=todaysFullDate.getDate()-1;
const year=todaysFullDate.getFullYear();
const month=todaysFullDate.getMonth()+1;


class TableStats extends React.Component{
constructor(props){
	super(props);
  this.state={
   tableData:[]

   }

 }

 componentDidUpdate(){
 fetch(`https://covid19.mathdro.id/api/daily/${month}-${todaysdate}-${year}`)
 .then(response=>response.json())
 .then(data=>this.setState({tableData:data}))
 .catch(err=>console.log('ErrorMessage:',err))
  }

 render(){
 	const {tableData}=this.state;
 	const {searchField}=this.props;
 	const filteredTableData = tableData.filter(data =>
      (data.countryRegion.toLowerCase()===searchField.toLowerCase())
    );
 	return(
 		<div className='table-stats'>
 		<table className="ui violet inverted table">
 		<thead className="">
 		<tr className="">
 		<th className="">States</th>
 		<th className="">Confirmed</th>
 		<th className="">Active</th>
 		<th className="">Deaths</th>
 		<th className="">lastUpdate</th>
 		</tr>
 		</thead>
 		<tbody>
 		{    
 			(filteredTableData===[])?<h1> No Data Present </h1>:
 			filteredTableData.map(({combinedKey,confirmed,active,deaths,lastUpdate},index)=>(
            <Table key={index} provinceState={combinedKey} confirmed={confirmed} active={active} deaths={deaths} lastUpdate={lastUpdate.slice(0,10)} />
         ))

 		}
 		</tbody>
 		</table>
        </div>
 		);
 }

}

export default TableStats;