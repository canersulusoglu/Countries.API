import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// Database
import Continents from './data/continents.json';
import Countries from './data/countries.json';
import Languages from './data/languages.json';

const main = async () => {
    const PORT = process.env.PORT || 4000;
    const app = express();
    app.use(cors());
    app.use(express.json());
    const httpServer = http.createServer(app);
    const graphqlSchema = makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolvers
    });
    const apolloServer = new ApolloServer({
        schema: graphqlSchema,
        introspection: true,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
        context: () => ({
            db: {
                Continents,
                Countries,
                Languages
            }
        }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/'
    });
    httpServer.listen(PORT, () => {
        console.info(
        `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
        );
    });
};

main();