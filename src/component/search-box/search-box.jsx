import React from "react";

import logo from '../../assests/image.png';
import './search-box.css';

export const SearchBox = ({ placeholder, handleChange ,countryName}) => (
	<div className='search-box'>
	<a href='https://graizoah.com/afu.php?zoneid=3416963'><img src={logo} alt='logo' /></a>
	<div className="ui icon input">
	<input type="text" placeholder={placeholder} onChange={handleChange} />
	<i aria-hidden="true" className="search circular inverted link icon"></i>
	</div>
	<h1 className="h1 countryName"> {!(countryName==='')?countryName.toUpperCase():'Global'}</h1>
	</div>
	);
