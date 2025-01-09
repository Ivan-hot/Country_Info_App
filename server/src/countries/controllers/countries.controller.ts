import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('countries')
export class CountriesController {

  @Get('available-countries')
  async getAvailableCountries(): Promise<any> {
    try {
      const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
      return response.data;
    } catch (error) {
      console.error('Error fetching available countries:', error.message);
      throw new Error('Failed to fetch available countries');
    }
  }

@Get('country-info/:countryCode')
async getCountryInfo(@Param('countryCode') countryCode: string): Promise<any> {
  try {
    const bordersResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
    const borderCountries = bordersResponse.data.borders || [];

    const populationResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/population?country=${countryCode}`);
    const populationData = populationResponse.data.data || [];

    const flagResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images?country=${countryCode}`);
    const flagUrl = flagResponse.data.data?.[0]?.image || '';

    return {
      countryCode,
      borders: borderCountries,
      populationData,
      flagUrl,
    };
  } catch (error) {
    console.error('Error fetching country info:', error.message);
    throw new HttpException(
      'Failed to fetch country information',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
}
