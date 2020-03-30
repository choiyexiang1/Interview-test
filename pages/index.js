import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import Layout from '../components/Layout';

const cache = new InMemoryCache();
const link = createHttpLink({ uri: "https://api.spacex.land/graphql/", fetch: fetch });

export const client = new ApolloClient({
    cache,
    link
});

const index = () => (
    <Layout>
        <h1>Hello world</h1>
    </Layout>
);

export default index;
