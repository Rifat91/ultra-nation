import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flag, name, population, region } = props.country;
    const countryStyle = {border: '1px solid green', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <div className="flag">
                <img style={{ height: '100px'}} src={flag} alt="Country Flag" />
            </div>
            <div className="information">
                <h1>This is {name}</h1>
                <h2>Population : {population}</h2>
                <h3>Region : {region}</h3>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;