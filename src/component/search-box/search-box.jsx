import React from "react";

import logo from '../../assests/image.png';
import './search-box.css';

export const SearchBox = ({ placeholder, handleChange ,countryName}) => (
	<div className='search-box'>
	<img src={logo} alt='logo' className='image'/>
	<div className="ui icon input">
	<input type="text" placeholder={placeholder} onChange={handleChange} />
	<i aria-hidden="true" className="search circular inverted link icon"></i>
	</div>
	<h1 className="h1 countryName"> {!(countryName==='')?countryName.toUpperCase():'Global'}</h1>
	</div>
	);
