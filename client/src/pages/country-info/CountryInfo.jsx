import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCountryPopulation, getCountryFlag } from '../../services/countriesService';
import PopulationChart from '../../components/PopulationChart';

const CountryInfo = () => {
  const [populationData, setPopulationData] = useState([]);
  const [flagUrl, setFlagUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { countryCode } = router.query;

  useEffect(() => {
    if (!countryCode) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const population = await getCountryPopulation(countryCode);
        setPopulationData(population);

        const flag = await getCountryFlag(countryCode);
        setFlagUrl(flag);
      } catch (err) {
        setError('Failed to fetch country data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [countryCode]);

  if (loading) return <p>Loading country data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Country Information</h1>
      {flagUrl && <img src={flagUrl} alt={`${countryCode} flag`} style={{ width: '200px' }} />}
      <PopulationChart populationData={populationData} />
    </div>
  );
};

export default CountryInfo;
