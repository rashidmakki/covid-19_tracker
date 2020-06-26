import React from 'react';
import './card.css';

export const Card=({status,index})=>{
    return(
      <div className="card-container">
       
      <a className="ui card" href="#card-example-link-card">
      <div className="content">
      <div className="ui mini purple statistic">
      <div className="label">{index.toUpperCase()}</div>
      <div className="value">{status}</div>
      </div>
      </div>
      </a>
      
      </div>
    );
}
