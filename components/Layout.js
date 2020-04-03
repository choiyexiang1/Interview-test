import Head from 'next/head';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import '../styles/style.scss';
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
                <title>SpaceX | Rockets</title>
                <link rel="icon" href="/icon.png" type="image/icon type"></link>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.1/css/bulma.min.css"/> */}
            </Head>
            <Navbar />
            {props.children}
        </div>
    );
}

export default Layout;