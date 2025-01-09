import React from 'react';
import Link from 'next/link';

const BorderCountries = ({ borders }) => {
  if (!borders || borders.length === 0) return <p>No border countries.</p>;

  return (
    <div>
      <h3>Border Countries:</h3>
      <ul>
        {borders.map((borderCountryCode) => (
          <li key={borderCountryCode}>
            <Link href={`/countries/country-info/${borderCountryCode}`}>
              <a>{borderCountryCode}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorderCountries;
