import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get('http://localhost:3000/countries/available-countries');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
    fetchCountries();
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
