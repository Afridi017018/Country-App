import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Countries from './Countries';
import "./countriesProject.css"
import Search from './Search';

const url = "https://restcountries.com/v3.1/all"

const CountriesProject = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [countries, setCountries] = useState([])
    const [currentCountries, setCurrentCountries] = useState([])

    const fetchData = async (url) => {

        try {
            const response = await fetch(url)
            const data = await response.json()
            setCountries(data)
            setCurrentCountries(data)
            setIsLoading(false)
            setError(null)
            // console.log(data[0]?.name.common)
        }

        catch (err) {
            setError(err)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [])

    const handleRemove = (name) => {
        const filteredCurrentCountry = currentCountries.filter((country) => country.name.common !== name);
        const filteredCountries = countries.filter((country) => country.name.common !== name);

        // setCountries(filtered)
        setCurrentCountries(filteredCurrentCountry)
        setCountries(filteredCountries)
    }

    const handleOnSearch = (searchValue) => {
        const value = searchValue.toLowerCase();


        const searchedCountry = currentCountries.filter((country) => {
            const countryName = country.name.common.toLowerCase();

            return countryName.startsWith(value)
        })


        setCountries(searchedCountry)
    }

    return (
        <div>
            <h1>Country App</h1>
            <Search onSearch={handleOnSearch} />
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            {countries.length > 0 && <Countries countries={countries} onRemove={handleRemove} />}
        </div>
    );
};

export default CountriesProject;