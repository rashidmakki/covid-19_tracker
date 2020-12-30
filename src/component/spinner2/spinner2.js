import React from 'react';
import Loader from "react-loader-spinner";
const Spinner2=()=>{
    return (
      <Loader
        type="Hearts"
        color="#0e59b5"
        height={130}
        width={130}
        timeout={5000000} //3 secs
      />
    ); 
}

export default Spinner2;

