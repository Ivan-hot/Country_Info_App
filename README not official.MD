

















Installation:
npm install -g @nestjs/cli
nest new country-info-app
cd country-info-app

npm install axios
npm install @nestjs/axios
npm install @nestjs/platform-express
npm install class-validator class-transformer
npm install dotenv
npm install -D @types/express
npm install chart.js react-chartjs-2
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev

files/folders
nest g module countries
nest g controller countries
nest g service countries

npm install --save-dev typescript
npx tsc --init

package.json file
You may see different cmds such as:
"start": "nest start"
Starts the NestJS application in production mode.
Runs the compiled JavaScript files from the dist/ directory.
2. "start:dev": "nest start --watch"
Starts the NestJS application in development mode with hot-reload enabled.
Automatically restarts the application when file changes are detected.
3. "start:debug": "node --inspect-brk dist/main.js"
Starts the application in debug mode.
The --inspect-brk flag enables debugging and pauses the execution at the first line of the code, allowing you to attach a debugger (e.g., in VS Code or Chrome DevTools).
4. "build": "nest build"
Compiles the TypeScript files into JavaScript files and places them in the dist/ directory.
Prepares the application for production.
5. "lint": "eslint . --ext .ts --fix"
Runs ESLint to check for code style and syntax errors in all TypeScript (.ts) files.
The --fix flag automatically fixes fixable issues, such as formatting problems.
6. "format": "prettier --write ."
Formats the codebase using Prettier.
The --write flag ensures Prettier modifies files directly to match the formatting rules.
7. "tsc": "tsc --watch"
Runs the TypeScript compiler (tsc) in watch mode.
Watches for file changes and recompiles the TypeScript files into JavaScript automatically.
8. "debug": "node --inspect-brk dist/main.js"
Similar to "start:debug".

to start the project go to the terminal and
write npm run start:dev

http://localhost:3000
Will see: 
Welcome to the Country Info App API!

http://localhost:3000/countries/available-countries
Will see:
[{"countryCode":"AD","name":"Andorra"},{"countryCode":"AL","name":"Albania"},{"countryCode":"AM","name":"Armenia"},{"countryCode":"AR","name":"Argentina"},{"countryCode":"AT","name":"Austria"},
...]


http://localhost:3000/countries/country-info/AD
will see
{"countryCode":"AD","borders":[{"commonName":"France","officialName":"French Republic","countryCode":"FR","region":"Europe","borders":null},{"commonName":"Spain","officialName":"Kingdom of Spain","countryCode":"ES","region":"Europe","borders":null}],"populationData":[{"country":"Arab World","code":"ARB","iso3":"ARB","populationCounts":[{"year":1960,"value":92197753},{"year":1961,"value":94724510},{"year":1962,"value":97334442},{"year":1963,"value":100034179},{"year":1964,"value":102832760},{"year":1965,"value":105736431},{"year":1966,"value":108758610},{"year":1967,"value":111899364},{"year":1968,"value":115136178},{"year":1969,"value":118437195},{"year":1970,"value":121785650},{"year":1971,"value":125164745}, ......

