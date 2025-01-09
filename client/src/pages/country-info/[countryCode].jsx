import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import BorderCountries from '../../components/BorderCountries';
import PopulationChart from '../../components/PopulationChart';

const CountryInfo = () => {
  const router = useRouter();
  const { countryCode } = router.query;
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    if (countryCode) {
      async function fetchCountryInfo() {
        try {
          const response = await axios.get(`http://localhost:3000/countries/country-info/${countryCode}`);
          setCountryInfo(response.data);
        } catch (error) {
          console.error('Error fetching country info:', error);
        }
      }
      fetchCountryInfo();
    }
  }, [countryCode]);

  if (!countryInfo) return <p>Loading...</p>;

  return (
    <div>
      <h1>{countryInfo.name}</h1>
      <img src={countryInfo.flagUrl} alt={`${countryInfo.name} Flag`} />
      <BorderCountries borders={countryInfo.borders} />
      <PopulationChart populationData={countryInfo.populationData} />
    </div>
  );
};

export default CountryInfo;
