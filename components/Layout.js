import Head from 'next/head';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import '../styles/style.scss'
import Navbar from "./Navbar";

const cache = new InMemoryCache();
const link = createHttpLink({ uri: "https://api.spacex.land/graphql/", fetch: fetch });

export const client = new ApolloClient({
    cache,
    link
});

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>SpaceX-Rockets</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Navbar />
            {props.children}
        </div>
    );
}

export default Layout;