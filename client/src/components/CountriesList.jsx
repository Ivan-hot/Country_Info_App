import React, { useEffect, useState } from 'react';
import { fetchAvailableCountries } from '../services/countriesService';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetchAvailableCountries();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link href={`/country-info/${country.countryCode}`}>
              <a>{country.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
