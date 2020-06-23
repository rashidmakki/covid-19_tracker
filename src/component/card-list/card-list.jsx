import React from "react";
import {Card} from "../card/card";

import "./card-list.css";

export const CardList = ({monster}) => {
  return (
    <div className="cardList">
    { 
    	Object.keys(monster).map((index,key)=>(
    		(key<3)?
    		<Card key={key} status={monster[index].value}  index={index} />:
    		(index==='lastUpdate')?
    		<Card key={key} status={monster[index].slice(0,10)}  index={index} />:''
    		))
    } 
    
    </div>
  );
};
