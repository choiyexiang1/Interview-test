import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import gql from "graphql-tag";
import Head from 'next/head';

import Layout, { client } from '../../components/Layout';
import Loader from '../../components/Loader';

const Rocket = () => {

    const [rocket, setRocket] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // https://github.com/zeit/next.js/issues/8259
    const [id, setId] = useState(null)
    const { query } = useRouter()

    useEffect(() => {
        setId(query.id)

        if (id) {
            client
                .query({
                    query: gql`
                        query GET_ROCKET {
                            rocket(id: "${id}") {
                                name
                                country
                                description
                            }
                        }
                    `
                })
                .then(result => {
                    console.log(result)
                    setRocket(result.data.rocket)
                    setIsLoading(false)
                });
        }
    }, [query, id])

    return (
        <div>
            {isLoading ?
                //isLoading (true)--------------------------------------------------------------------------------------------
                <Layout>
                    <div style={{ backgroundColor: 'black', opacity: 0.8, height: '92vh' }}>
                        <Loader />
                    </div>
                </Layout>
                :
                //isLoading (false)--------------------------------------------------------------------------------------------
                <Layout>
                    <Head>
                        <title>{rocket.name} | SpaceX</title>
                    </Head>
                    <p>RocketName: {rocket.name}</p>
                    <p>RocketCountry: {rocket.country}</p>
                    <p>RocketDescription: {rocket.description}</p>
                    <div class="tabs">
                        <ul>
                            <li class="is-active"><a>Pictures</a></li>
                            <li><a>Music</a></li>
                            <li><a>Videos</a></li>
                            <li><a>Documents</a></li>
                        </ul>
                    </div>
                </Layout>
            }
        </div>
    );
}

export default Rocket