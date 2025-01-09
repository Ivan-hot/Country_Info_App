# Country Info App

This application provides detailed information about countries including their population, borders, and flags. It fetches data from third-party APIs and displays it in an interactive web interface built with React.

## Technologies
- **Backend**: NestJS, TypeScript, Axios
- **Frontend**: React, Next.js, Chart.js
- **CSS Framework**: Tailwind CSS

## Setup

### Development Setup

1. Clone the repository:
    ```bash
    git clone <https://github.com/Ivan-hot/Country_Info_App>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with necessary environment variables:
    ```bash
    API_URL=http://localhost:3000
    ```

4. Run the project in development mode:
    ```bash
    npm run start:dev
    ```

### Running Unit Tests

To run unit tests:

1. Install testing dependencies:
    ```bash
    npm install --save-dev jest @nestjs/testing ts-jest @types/jest
    ```

2. Run tests:
    ```bash
    npm run test
    ```

## API Endpoints

- **GET /countries/available-countries**: Returns a list of available countries.
- **GET /countries/country-info/{countryCode}**: Returns detailed information about a specific country.
Eample:
- **GET /countries/country-info/AD**

## Code Quality

To check code quality and linting:

```bash
npm run lint
