# Countries API

<p align="center">
  View Deployment on 
  <a href="https://countries-graphql-api.herokuapp.com/" target="_blank">
    <img align="center" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white">
  </a>
</p>

This API includes continents, countries, languages informations and each have relation with other types.
- Developed using GraphQL.
- You can access all data with these files:
  - All continents: [continents.json](./src/data/continents.json).
  - All languages: [languages.json](./src/data/languages.json).
  - All countries: [countries.json](./src/data/countries.json).

### Environment Variables

```sh
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

### Using Techs

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)