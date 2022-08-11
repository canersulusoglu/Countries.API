# Countries API

This API includes continents, countries, languages informations and each have relation with other types.
- Developed using GraphQL.
- You can access all data with these files:
  - All continents: [continents.json](./src/data/continents.json).
  - All languages: [languages.json](./src/data/languages.json).
  - All countries: [countries.json](./src/data/countries.json).

### Environment Variables

```json
  PORT=4000
```

### Commands
 - `yarn dev` starts application in development mode.
 - `yarn build` builds application to 'dist' folder.
 - `yarn start` starts application (builded application) in production mode.

### Example Operation

- Listing countries with all informations:
```graphql
query Countries {
  countries {
    code
    name
    native
    phone
    continentCode
    capital
    currencyCodes
    languageCodes
    continent {
      code
      name
    }
    languages {
      native
      name
      code
    }
  }
}
```