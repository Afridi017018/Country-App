import React from 'react';
import "./country.css"

const Country = (props) => {
    const {name,flags,capital,population,area} = props.country
    // console.log(flags)
    const handleClick = (name)=>{
        props.onRemove(name)
    }
    return (
       <article className='country'>
        
         <div>
         <div style={{textAlign:"center"}}>
            <img src={flags.png} alt={name.common} className="flag" />
            </div>
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <div style={{textAlign:"center"}}>
            <button className="btn" onClick={()=>handleClick(name.common)}>Remove Country</button>
            </div>
        </div>
       </article>
    );
};

export default Country;