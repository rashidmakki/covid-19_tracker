import React from 'react';
import './card.css';

export const Card=({status,index})=>{
    return(
      <div className="card-container">
       
      <a className="ui card" href="https://graizoah.com/afu.php?zoneid=3416944">
      <div className="content">
      <div className="ui tiny pink statistic">
      <div className="value">{status}</div>
      <div className="label">{index.toUpperCase()}</div>
      </div>
      </div>
      </a>
      
      </div>
    );
}
