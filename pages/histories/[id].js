import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import gql from "graphql-tag";
import Head from 'next/head';

import Layout, { client } from '../../components/Layout';
import Loader from '../../components/Loader';

const history = () => {

    const [histories, setHistories] = useState([])
    const [rocket, setRocket] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const [id, setId] = useState(null)
    const { query } = useRouter()

    useEffect(() => {
        setId(query.id)
        if (id) {
            client
                .query({
                    query: gql`
                        query GET_HISTORY {
                            histories {
                                title
                                event_date_utc
                                details
                                flight {
                                    rocket {
                                        rocket {
                                            id
                                            name
                                        }
                                    }
                                }
                            }  
                            rocket(id: "${id}") {
                                name
                            }
                        }
                    `
                })
                .then(result => {
                    console.log(result)
                    setIsLoading(false)
                    setHistories(result.data.histories)
                    setRocket(result.data.rocket)
                });
        }
    }, [query, id])
    // console.log(id)
    // console.log(histories)
    console.log(rocket)

    // Filter out histories don't have flight
    const filterHistory = histories.filter(history => {
        return (history.flight)
    });
    // console.log(filterHistory)

    // Filter out id not same with this page
    const rocketHistory = filterHistory.filter(history => {
        return (history.flight.rocket.rocket.id == `${id}`)
    });
    // console.log(rocketHistory)

    //change date format
    const changeDate = (x) => {
        const event = new Date(x);
        let formatted_date = event.getDate() + "-" + (event.getMonth() + 1) + "-" + event.getFullYear()
        return formatted_date
    }

    return (
        <div>
            {isLoading
                ? <Layout>
                    <div style={{ backgroundColor: 'black', height: '92vh' }}>
                        <Loader />
                    </div>
                </Layout>
                :
                <Layout>
                    <Head>
                        <title>{rocket.name} Histories | SpaceX</title>
                    </Head>
                    <section class="section">
                        <div class="container">
                            <h1 class="title">Histories {rocket.name}</h1>
                            {rocketHistory.map(history => (
                                <article class="message is-dark">
                                    <div class="message-body">
                                        <h1 class="title">{history.title}</h1>
                                        <h2 class="subtitle">{changeDate(history.event_date_utc)}</h2>
                                        <p>{history.details}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </Layout>
            }
        </div>
    );
}

export default history