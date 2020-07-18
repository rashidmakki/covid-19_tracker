import React from 'react';

const Table=({provinceState,confirmed,active,deaths,lastUpdate})=>(
	<tr>
	<td className="">{provinceState}</td>
	<td className="">{confirmed}</td>
	<td className="">{active}</td>
	<td className="">{deaths}</td>
	<td className="">{lastUpdate}</td>
	</tr>
	);

export default Table;
