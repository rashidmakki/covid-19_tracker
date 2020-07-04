import React from 'react';
import './card.css';

export const Card=({status,index})=>{
    return(
      <div className="card-container">
       
      <a className="ui card" href="#">
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
