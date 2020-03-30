import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import gql from "graphql-tag";
import { client } from '..';

import Layout from '../../components/Layout';

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
            <p>Rocket: {rocket.name}</p>
        </Layout>
    );
}

export default Rocket