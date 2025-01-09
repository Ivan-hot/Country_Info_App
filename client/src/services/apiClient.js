import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/countries",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAvailableCountries = async () => {
  try {
    const response = await apiClient.get("/available-countries");
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error.message);
    throw error;
  }
};

export const fetchCountryInfo = async (countryCode) => {
  try {
    const response = await apiClient.get(`/country-info/${countryCode}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching country info:", error.message);
    throw error;
  }
};
