import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import gql from "graphql-tag";

import Layout, { client } from '../../components/Layout';

const Rocket = () => {

    const [rocket, setRocket] = useState({})

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
                });
        }
    }, [query, id])

    return (
        <Layout>
            <p>RocketName: {rocket.name}</p>
            <p>RocketCountry: {rocket.country}</p>
            <p>RocketDescription: {rocket.description}</p>
        </Layout>
    );
}

export default Rocket