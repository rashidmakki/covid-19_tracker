import React from "react";

import './search-box.css';

export const SearchBox = ({ placeholder, handleChange ,countryName}) => (
	<div className='search-box'>
	<h1 className="h1"> COVID-19 </h1>
	<div className="ui icon input">
	<input type="text" placeholder={placeholder} onChange={handleChange} />
	<i aria-hidden="true" class="search circular inverted link icon"></i>
	</div>
	<h1 className="h1 countryName"> {!(countryName==='')?countryName.toUpperCase():'Global'}</h1>
	</div>
	);
