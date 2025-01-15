import axios from 'axios';

const BASE_URL = 'https://countriesnow.space/api/v0.1';

export const getCountryPopulation = async (countryName) => {
  try {
    const response = await axios.post(`${BASE_URL}/countries/population`, {
      country: countryName,
    });
    return response.data.data.populationCounts;
  } catch (error) {
    console.error('Error fetching population data:', error);
    throw error;
  }
};

export const getCountryFlag = async (countryName) => {
  try {
    const response = await axios.post(`${BASE_URL}/countries/flag/images`, {
      country: countryName,
    });
    return response.data.data.flag;
  } catch (error) {
    console.error('Error fetching flag URL:', error);
    throw error;
  }
};
