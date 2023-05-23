import React from 'react';
import {v4 as uuid4} from "uuid"
import Country from './Country';
import "./countries.css"

const Countries = ({countries,onRemove}) => {
// console.log(countries)
    return (
        <section className='countries'>
            {countries.map((country)=>{
                const newCountry = {country,id: uuid4()}
                return <Country {...newCountry} key = {newCountry.id} onRemove={onRemove}/>
            }) }
        </section>
    );
};

export default Countries;